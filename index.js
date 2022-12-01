require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();
const connectDB = require("./config/connect");

const morgan = require("morgan");
const bodyParser = require("body-parser");
const rateLimiter = require("express-rate-limit");
const helmet = require("helmet");
const xss = require("xss-clean");
const cors = require("cors");
const mongoSanitize = require("express-mongo-sanitize");

const notFoundMiddleware = require("./middlewares/not-found");
const errorHandlerMiddleware = require("./middlewares/error-handler");
const schoolsRouter = require("./routes/School");
const notesRouter = require("./routes/Note");
const eventsRouter = require("./routes/Event");
const galleryRouter = require("./routes/Gallery");
const postsRouter = require("./routes/Post");
const adminRouter = require("./routes/Admin");
const commentsRouter = require("./routes/Comments");
const paystackRouter = require("./routes/paystackRoutes");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
const fileupload = require("express-fileupload");

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(
  fileupload({
    useTempFiles: true,
  })
);

app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 60,
  })
);

app.use(helmet());
app.use(cors());
app.use(xss());
app.use(mongoSanitize());
app.use(morgan("tiny"));

app.use(express.json());

app.use("/api/v1/schools", schoolsRouter);
app.use("/api/v1/notes", notesRouter);
app.use("/api/v1/events", eventsRouter);
app.use("/api/v1/gallery", galleryRouter);
app.use("/api/v1/posts", postsRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/comments", commentsRouter);
app.use("/api/v1/payment", paystackRouter);

// error middlewares
app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);
const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is currently listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
