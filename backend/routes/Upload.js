import express from "express";
var router = express.Router();
import path from "path";
import multer from "multer";
import fs from "fs";
import File from "../models/File.js";
import axios from "axios";
import FormData from "form-data";
import http from "http";
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
function login() {
  const url = "http://canvas.iiit.ac.in/lipsyncuc3/auth/login";

  const params = new URLSearchParams();
  params.append("username", "3davatar@lipsync.com");
  params.append("password", "password");

  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  axios
    .post(url, params, config)
    .then((result) => {
      console.log("Success");
      cur_token = result.data.access_token;
    })
    .catch((err) => {
      console.log(err);
    });
}
const fileFilter = (req, file, callback) => {
  let pattern = /jpg|png|svg|m4a|mp4/; // reqex

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
  console.log("Upload complete");
  // console.log(req);
  //   console.log(req.file);
  res.status(200).json(req.file.path);
});

router.post("/add", (req, res) => {
  //   console.log("hi");
  //   console.log(req);

  const audio_regex = /m4a/;
  const video_regex = /mp4/;
  const image_regex = /jpg|png|svg/;

  var type;
  if (audio_regex.test(path.extname(req.body.path))) {
    type = "audio";
  } else if (video_regex.test(path.extname(req.body.path))) {
    type = "video";
  } else if (image_regex.test(path.extname(req.body.path))) {
    type = "image";
  } else {
    console.log(req.body);
    return res.status(400).send("Invalid extension");
  }
  const newFile = new File({
    name: req.body.name,
    path: req.body.path,
    purpose: req.body.purpose,
    type: type,
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

router.get("/get_files", (req, res) => {
  File.find({})
    .then((files) => {
      res.status(200).json(files);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
});

router.get("/get_user", (req, res) => {
  //   console.log("hi");
  //   console.log(req);

  const url = "http://4baa-34-67-29-245.ngrok.io/";

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
router.post("/modelize", async (req, res) => {
  let url = "http://7380-35-188-81-199.ngrok.io/";

  const formData = new FormData();
  formData.append("file", fs.createReadStream("./uploads/diff_refimg.png"));
  // formData.append("file2", fs.createReadStream("./uploads/gt.mp4"));
  try {
    const getFile = await axios.post(url, formData, {
      headers: {
        ...formData.getHeaders(),
      },
    });
    console.log(getFile.data);
    const file = fs.createWriteStream("./uploads/file.mp4");
    const request = http.get(url + "uploads/result.mp4", function (response) {
      response.pipe(file);
      // after download completed close filestream
      file.on("finish", () => {
        file.close();
        console.log("Download Completed");
        axios.post(url + "del_result");
        res.status(200).json(getFile.data);
      });
    });
  } catch (e) {
    // console.log(e, "getFileError");
    res.status(400).send(e);
  }
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
  console.log("Body is");
  console.log(req.body);
  const audio_path = req.body.audio_path;
  const video_path = req.body.video_path;
  if (!fs.existsSync(audio_path) || !fs.existsSync(video_path)) {
    res.status(400).send("File not found");
    return;
  }

  // return res.status(2011).send("ok");
  curl.setOpt(Curl.option.HTTPPOST, [
    { name: "audio", file: "./" + audio_path },
    { name: "video", file: "./" + video_path },
    // { name: "input-name2", contents: "field-contents" },
  ]);

  curl.on("end", function (statusCode, body, headers) {
    console.log("Status:", statusCode);
    if (parseInt(statusCode) === 401) {
      console.log("Please try again");
      login();
    }

    console.log("Headers:", headers);
    console.log("Body:", body);
    res.status(200).json(body);
    close();
  });
  curl.on("error", function (err) {
    console.log("error", err);
    console.log("NOOO");
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
