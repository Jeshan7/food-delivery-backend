const express = require("express"),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser");

const server = express();

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server at ${PORT}`)
});
