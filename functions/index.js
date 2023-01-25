const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");

const stripe = require("stripe")("YOUR_STRIPE_SECRET_KEY");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

//App config
const app = express();

//Middleware
app.use(cors({ origins: "http://localhost:3000" }));
app.use(express.json());

//API Routes
app.get("/", (request, response) =>
  response.status(200).send("Hello from Cloud Functions Nice!")
);

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment Request Recieved for the amount ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen
exports.api = functions.https.onRequest(app);

//EndPoint
// http://127.0.0.1:5001/clone-f8d17/us-central1/api
