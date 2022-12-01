const CustomError = require("../errors/CustomError");
const Payment = require("../models/Payment");
const { initializePayment, verifyPayment } = require("../utils/paystack");

const initializePayStack = async (req, res) => {
  let { email, full_name, amount } = req.body;
  console.log(req.body);
  let form = {};
  amount *= 100;
  form = JSON.stringify({
    email,
    amount,
    currency: "NGN",
  });
  form.metadata = {
    full_name,
  };

  console.log(form);
  initializePayment(form, res);
};

const verify = async (req, res) => {
  verifyPayment(res);
};

module.exports = { initializePayStack, verify };
