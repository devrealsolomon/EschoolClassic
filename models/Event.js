const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  event_date: {
    type: Date,
    required: true,
  },
  is_cancelled: {
    type: Boolean,
    default: false,
  },
  event_image: {
    public_id: { type: String },
    url: {
      type: String,
    },
  },
  school: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "School",
    required: true,
  },
});

module.exports = mongoose.model("Event", eventSchema);
