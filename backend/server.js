import express from "express";
const app = express();
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
const PORT = process.env.PORT || 4000;

import auth from "./middleware/auth.js";
import UserRouter from "./routes/Users.js";
import UploadRouter from "./routes/Upload.js";
//app.use(cors());
app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connection to MongoDB
mongoose.connect(
  "mongodb+srv://root:toor@avatar.2c24z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once("open", function () {
  console.log("MongoDB database connection established successfully !");
});

// setup API endpoints

app.use("/user", UserRouter);
app.use("/upload", UploadRouter);
app.use("/uploads", express.static("uploads"));
app.use(function (req, res, next) {
  res.setTimeout(0);
  next();
});
app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
