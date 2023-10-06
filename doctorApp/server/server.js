const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config({ path: "./config/.env" });
require("./config/db");

const Auth = require("./routes/Auth");
const User = require("./routes/User");
const Doctor = require("./routes/Doctor");
// const Review = require("./routes/Review");


const app = express();

const corsOptions = {
  origin: true,
};

app.get("/", (req, res) => {
  res.send('Hello doctor!');
});

// Middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use('/api/v1/Auth', Auth);
app.use('/api', User);
app.use('/api', Doctor);
// app.use('/api', Review);

// Port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on ${port}...`);
});
