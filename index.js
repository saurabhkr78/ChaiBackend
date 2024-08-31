require('dotenv').config()
const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello!Saurabh");
});
app.get("/github", (req, res) => {
  res.send("saurabhkr78");
});
app.get("/login", (req, res) => {
  res.send("<h1>Please login at B6IX</h1>");
});
app.get("/youtube", (req, res) => {
  res.send("<h2>Welcome to chai aur code</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
