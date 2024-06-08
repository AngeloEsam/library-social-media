const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const postRoute = require("./routes/postRoute");

const bookRoutes = require("./routes/bookRoutes");
const ratingRoutes = require("./routes/ratingRoutes");
const authorRoutes = require("./routes/authorRoutes");

// const bookRoutes = require("./routes/bookRoutes");

const cors = require("cors");
const dotenv = require("dotenv").config();
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
mongoose
  .connect(process.env.CONNECTION_DB)
  .then(() => console.log("connected to db 😃"))
  .catch((err) => console.error(err));
app.use("/users", userRoutes);
app.use("/posts", postRoute);

app.use("/books", bookRoutes);
app.use("/ratings", ratingRoutes);
app.use("/authors", authorRoutes);

// app.use("/books", bookRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
