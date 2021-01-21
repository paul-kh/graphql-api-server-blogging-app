// IMPORTED MODULES
const express = require("express");
const mongoose = require("mongoose");

// INIT INSTANCES
const app = express();

// GLOBAL VARIABLES
const PORT = process.env.PORT | 5000;
const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_DB_NAME = process.env.MONGO_DB_NAME;
const MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.wvahj.mongodb.net/${MONGO_DB_NAME}`;

// CORS SETTINGS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// CONNECT TO MONGODB & START SERVER
mongoose
  .connect(MONGO_URI)
  .then((result) => {
    app.listen(PORT, () => {
      console.log("DB connection is successfully established!");
      console.log("The server is running on PORT", PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
