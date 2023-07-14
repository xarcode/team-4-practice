require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const notFoundMw = require("./middleware/not-found");
const errorMw = require("./middleware/error-handler");
const connectDB = require("./db/connect");

const authRoutes = require("./routes/auth");

app.get("/", (req, res) => {
  res.send("Home page");
});

app.use("/auth", authRoutes);
app.use(notFoundMw);
app.use(errorMw);

port = process.env.PORT || 5000;

mongoose
  .connect(
    "mongodb+srv://ayushidnan:xarcode3101@cluster0.py9bhik.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    app.listen(5000, () => {
      console.log(`Server Port: 5000`);
    });
  })
  .catch((error) => console.log("Did not connect", error));
