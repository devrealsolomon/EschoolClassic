const mongoose = require("mongoose");

const connectDB = (url) => {
  mongoose.connect(url);
};

// const Pusher = require("pusher");

// const pusher = new Pusher({
//   cluster: "mt1",
//   appId: process.env.appId,
//   secret: process.env.secret,
//   key: process.env.key,
//   useTLS: true,
// });

// const db = mongoose.connection;

// db.once("open", () => {
//   const messageCollection = db.collection("messages");
//   const changeStream = messageCollection.watch();
//   changeStream.on("change", (change) => {
//     if (change.operationType === "insert") {
//       const message = change.fullDocument;
//       pusher.trigger(message.sender.toString(), "inserted", message);
//       pusher.trigger(message.recipient.toString(), "inserted", message);
//     } else {
//       console.log("Error triggering pusher event");
//     }
//   });
// });

module.exports = connectDB;
