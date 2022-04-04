import express from "express";
var router = express.Router();
import path from "path";
import multer from "multer";
import fs from "fs";
import File from "../models/File.js";
import axios from "axios";
import FormData from "form-data";
import { Curl } from "node-libcurl";
let cur_token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNmNjZWJiMGYtMWNmNy00NWVkLTk3MDItOWM2NDQ3MDdlOGVmIiwiYXVkIjoiZmFzdGFwaS11c2VyczphdXRoIiwiZXhwIjoxNjQ5MTQ5NTkyfQ.i7PAr4jyNOxfXmdXtUyJXgv6ZdC2sxAmQ-uWXZZAHpg";

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

router.get("/get_user", (req, res) => {
  //   console.log("hi");
  //   console.log(req);

  const url = "http://canvas.iiit.ac.in/lipsyncuc3/users/me";

  axios
    .get(url, {
      headers: {
        "Content-type": "application/json",
        Authorization: "bearer " + cur_token,
      },
    })
    .then((response) => {
      console.log(response.data);
      res.status(200).json(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
});

router.post("/sync", (req, res) => {
  //   console.log("hi");
  //   console.log(req);

  const url = "http://canvas.iiit.ac.in/lipsyncuc3/predict";
  const curl = new Curl();
  const close = curl.close.bind(curl);

  curl.setOpt(Curl.option.URL, url);
  curl.setOpt(Curl.option.HTTPHEADER, [
    "Content-type: multipart/form-data",
    "Authorization: bearer " + cur_token,
    "accept: application/json",
  ]);
  curl.setOpt(Curl.option.HTTPPOST, [
    { name: "audio", file: "./uploads/vaudio.m4a" },
    { name: "video", file: "./uploads/vvideo.mp4" },
    // { name: "input-name2", contents: "field-contents" },
  ]);

  curl.on("end", function (statusCode, body, headers) {
    console.log("Status:", statusCode);
    console.log("Headers:", headers);
    console.log("Body:", body);
    res.status(200).json(body);
    close();
  });
  curl.on("error", function (err) {
    console.log("error", err);
    close();
  });
  curl.perform();

  console.log("Over");
  // fs.readFile("./uploads/new.mp4", function (err, video) {
  //   if (err) throw err;
  //   fs.readFile("./uploads/Recording.m4a", function (err, audio) {
  //     if (err) throw err;
  //     var bodyFormData = new FormData();

  //     bodyFormData.append("video", video.toString("binary"), "new.mp4");
  //     bodyFormData.append("audio", audio.toString("binary"), "Recording.m4a");

  //     // axios
  //     //   .post(url, {
  //     //     headers: {
  //     // "Content-type": "multipart/form-data",
  //     // Authorization: "bearer " + cur_token,
  //     // accept: "application/json",
  //     //     },
  //     //     data: bodyFormData,
  //     //   })
  //     //   .then((response) => {
  //     //     console.log(response.data);
  //     //     res.status(200).json(response.data);
  //     //   })
  //     //   .catch((err) => {
  //     //     console.log(err);
  //     //     res.status(400).send(err);
  //     //   });

  //     // axios({
  //     //   method: "post",
  //     //   url: url,
  //     //   data: bodyFormData,
  //     //   headers: {
  //     //     "Content-type": "multipart/form-data",
  //     //     Authorization: "bearer " + cur_token,
  //     //     accept: "application/json",
  //     //   },
  //     // })
  //     //   .then(function (response) {
  //     //     //handle success
  //     //     console.log(response);
  //     //     res.status(200).json(response.data);
  //     //   })
  //     //   .catch(function (response) {
  //     //     //handle error
  //     //     console.log(response);
  //     //     res.status(400).send(response);
  //     //   });
  //   });
  // });
});

export default router;
