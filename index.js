const express = require("express");
const morgan = require('morgan');

const app = express();



//middlewares
//app.use(morgan('dev'));
//app.use(morgan('short'));
app.use(morgan('combined'));




//routes

app.get("/", (req, res) => {
  res.end("Hello world");
});

app.get("/login", (req, res) => {
  res.end("Login");
});

app.get("*", (req, res) => {
  res.end("Error 4040 not found");
});



app.listen(3000, () => {
  console.log("server on port 3000");
});
