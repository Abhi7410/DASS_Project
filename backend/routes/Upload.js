import express from "express";
var router = express.Router();
import path from "path";
import multer from "multer";
import fs from "fs";
import File from "../models/File.js";

const storageEngine = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, callback) {
    callback(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const fileFilter = (req, file, callback) => {
  let pattern = /jpg|png|svg/; // reqex

  if (pattern.test(path.extname(file.originalname))) {
    callback(null, true);
  } else {
    callback("Error: not a valid file");
  }
};
const upload = multer({
  storage: storageEngine,
  fileFilter,
});
router.post("/upload", upload.single("uploadedFile"), (req, res) => {
  console.log("hi");
  console.log(req);
  //   console.log(req.file);
  res.status(200).json(req.file.path);
});

router.post("/add", (req, res) => {
  //   console.log("hi");
  //   console.log(req);

  const newFile = new File({
    name: req.body.name,
    path: req.body.path,
    purpose: req.body.purpose,
  });
  newFile
    .save()
    .then((file) => {
      res.status(200).json(file);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
});
export default router;
