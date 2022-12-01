const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  paymentType: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["success", "failed"],
    default: "success",
  },
  reference: {
    type: String,
    required: true,
  },
});
const Payment = mongoose.model("Payment", PaymentSchema);
module.exports = { Payment };
