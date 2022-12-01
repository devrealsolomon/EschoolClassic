const mongoose = require("mongoose");
const GallerySchema = new mongoose.Schema(
  {
    image: {
      public_id: { type: String },
      url: {
        type: String,
      },
    },
    caption: {
      type: String,
    },
    school: {
      type: mongoose.Types.ObjectId,
      ref: "School",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Gallery", GallerySchema);
