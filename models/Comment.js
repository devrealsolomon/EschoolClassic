const mongoose = require("mongoose");
const CommentSchema = new mongoose.Schema(
  {
    post: {
      type: mongoose.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    title: {
      type: String,
      maxlength: [600, "A comment can't be longer than 600 characters"],
    },
    image: {
      public_id: { type: String },
      url: {
        type: String,
      },
    },
    user: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", CommentSchema);
