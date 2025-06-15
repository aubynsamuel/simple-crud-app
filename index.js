const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const router = require("./routes/product.route");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", router);

app.get("/", (req, res) => {
  res.send(`Hello, your products server is up and running!`);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("Connection failed", err);
  });
