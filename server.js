const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 8080;
require('dotenv').config();
//process.env.MONGODB_URI || "mongodb://localhost/seatifyDB"
//"mongodb+srv://bookingsystem:bookingsystem@cluster0.yyymx.mongodb.net/seatifyDB?retryWrites=true&w=majority"

mongoose.connect(
  "mongodb+srv://bookingsystem:bookingsystem@cluster0.yyymx.mongodb.net/seatifyDB?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
