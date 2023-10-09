const express = require("express");
const app = express();

const user = require("./user");

// Without middleware
app.use("/user", user);

module.exports = app;
