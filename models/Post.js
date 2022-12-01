// Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.ObjectId,
      ref: "Admin",
      required: true,
    },
    category: {
      type: String,
    },
    image: {
      public_id: { type: String },
      url: {
        type: String,
      },
    },
    tags: {
      type: [String],
    },
    comments: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);
PostSchema.pre("remove", async function (next) {
  await this.model("Comment").deleteMany({ post: this._id });
});

module.exports = mongoose.model("Post", PostSchema);
