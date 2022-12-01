// const request = require("request");

const { response } = require("express");
const https = require("https");
const { Payment } = require("../models/Payment");
const MySecretKey = `Bearer ${process.env.MY_SECRET}`;
const initializePayment = (form, res) => {
  const options = {
    hostname: "api.paystack.co",
    port: 443,
    path: "/transaction/initialize",
    method: "POST",
    headers: {
      Authorization: MySecretKey,
      "content-type": "application/json",
      "cache-control": "no-cache",
    },
    form,
  };

  const req = https
    .request(options, (response) => {
      let data = "";

      response.on("data", (chunk) => {
        data += chunk;
      });
      response.on("end", () => {
        console.log(JSON.parse(data));
        const parsedData = JSON.parse(data);
        res.send(parsedData.data?.authorization_url);
      });
    })
    .on("error", (error) => {
      console.error(error);
      res.status(400).json(error);
    });
  req.write(form);
  req.end();
};

const verifyPayment = (res) => {
  // const options = {
  //   hostname: "api.paystack.co",
  //   port: 443,
  //   path: "/transaction/verify/:reference",
  //   method: "GET",
  //   headers: {
  //     Authorization: MySecretKey,
  //   },
  // };
  // https
  //   .request(options, (response) => {
  //     let data = "";

  //     response.on("data", (chunk) => {
  //       data += chunk;
  //     });

  //     response.on("end", () => {
  //       const parsedData = Json.parse(data);
  //       console.log(parsedData);
  // const { reference, amount, customer, channel } = parsedData?.data;
  // const email = customer?.email;
  // Payment.create({
  //   // name: full_name,
  //   paymentType: channel,
  //   email,
  //   amount,
  //   reference,
  // }).then((payment) => {
  //   if (payment) {
  //     window.alert("Payment was successful");
  //   }
  // });
  //   });
  // })
  // .on("error", (error) => {
  //   console.error(error);
  //   res.status(400).json(error);
  // });
  const options = {
    hostname: "api.paystack.co",
    port: 443,
    path: "/transaction/verify/:reference",
    method: "GET",
    headers: {
      Authorization: MySecretKey,
    },
  };

  https
    .request(options, (response) => {
      let data = "";

      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", () => {
        console.log(JSON.parse(data));
        res.status(200).json("Successfull");
      });
    })
    .on("error", (error) => {
      console.error(error);
      res.status(400).json(error);
    });
};

module.exports = { initializePayment, verifyPayment };
