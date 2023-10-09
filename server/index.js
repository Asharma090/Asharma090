const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_DEV !== "production"; //true false
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler(); //part of next config
const mongoose = require("mongoose");
const { auth } = require('express-openid-connect');
const auth0Config = require("./config/auth0Config");

const dbURL = "mongodb://127.0.0.1:27017/user";

const db = mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: false }) // Explicitly set to false})
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

nextApp.prepare().then(() => {
  // express code here
  const app = express();
  app.use(bodyParser.json());
  // auth router attaches /login, /logout, and /callback routes to the baseURL
  app.use(auth(auth0Config));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", require("./routes/index"));
  app.get("*", (req, res) => {
    return handle(req, res); // for all the react stuff
  });
  app.get('/callback', (req, res) => {
    // Handle the callback response from Auth0 here
    console.log("fffffffffffffffff")
  });
  
  app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`ready at http://localhost:${PORT}`);
  });
});
