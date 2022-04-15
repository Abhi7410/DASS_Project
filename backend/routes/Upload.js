import express from "express";
var router = express.Router();
import path from "path";
import multer from "multer";
import fs from "fs";
import File from "../models/File.js";
import Result from "../models/Result.js";
import axios from "axios";
import FormData from "form-data";
import http from "http";
import { fileURLToPath } from "url";
import { dirname } from "path";
import sleep from "sleep-promise";
import auth from "../middleware/auth.js";
import ObjectId from "mongoose";
import { uuid } from "uuidv4";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { Curl } from "node-libcurl";
import { exit } from "process";
let cur_token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNmNjZWJiMGYtMWNmNy00NWVkLTk3MDItOWM2NDQ3MDdlOGVmIiwiYXVkIjoiZmFzdGFwaS11c2VyczphdXRoIiwiZXhwIjoxNjQ5MTQ5NTkyfQ.i7PAr4jyNOxfXmdXtUyJXgv6ZdC2sxAmQ-uWXZZAHpg";
const ngrok_URL = "http://7324-35-203-130-238.ngrok.io/";
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
  let pattern = /jpeg|jpg|png|svg|m4a|mp4/; // reqex

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
router.post("/upload", auth, upload.single("uploadedFile"), (req, res) => {
  console.log("Upload complete");
  // console.log(req);
  //   console.log(req.file);

  res.status(200).json(req.file.path);
});

function ensureDirectoryExistence(filePath) {
  var dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

router.post("/add", auth, (req, res) => {
  //   console.log("hi");
  //   console.log(req);

  const audio_regex = /m4a/;
  const video_regex = /mp4/;
  const image_regex = /jpg|png|svg/;
  const ext = path.extname(req.body.path);
  var type;
  if (audio_regex.test(ext)) {
    type = "audio";
  } else if (video_regex.test(ext)) {
    type = "video";
  } else if (image_regex.test(ext)) {
    type = "image";
  } else {
    console.log(req.body);
    return res.status(400).send("Invalid extension");
  }
  let new_path = "./uploads/" + req.user.id + "/files/" + uuid() + "_";
  ensureDirectoryExistence(new_path);
  new_path += req.body.name + ext;
  fs.rename("./" + req.body.path, new_path, () => {
    const newFile = new File({
      name: req.body.name,
      path: new_path,
      purpose: req.body.purpose,
      type: type,
      user: req.user.id,
      id: uuid(),
    });

    console.log(newFile);
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
});

router.get("/get_files", auth, (req, res) => {
  File.find({ user: req.user.id })
    .then((files) => {
      res.status(200).json(files);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
});

router.get("/get_result", auth, (req, res) => {
  Result.find({ user: req.user.id })
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
});

function ensure_login() {
  const url = "http://canvas.iiit.ac.in/lipsyncuc3/users/me";
  axios
    .get(url, {
      headers: {
        "Content-type": "application/json",
        Authorization: "bearer " + cur_token,
      },
    })
    .then((response) => {
      console.log("Already Logged in");
    })
    .catch((err) => {
      console.log("Could not log in, logging in now!");
      login();
    });
}
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

// function get(url, resolve, reject) {
//   http.get(url, (res) => {
//     // if any other status codes are returned, those needed to be added here
//     // console.log("Url: " + url);
//     // console.log("Status code: " + res.statusCode);
//     if (res.statusCode === 301 || res.statusCode === 302) {
//       return get(res.headers.location, resolve, reject);
//     }
//     return url;
//   });
// }

router.post("/test", auth, async (req, res) => {
  var obj2 = {
    url: "http://localhost:4000/uploads/result.mp4",
    user: req.user,
  };
  // Sleep for 5 seconds
  await sleep(2000);
  res.status(200).json(obj2);
});

router.post("/modelize", auth, async (req, res) => {
  ensure_login();
  // Check if eq has audio_path
  if (req.body.audio_path == null || req.body.image_path == null) {
    return res.status(400).send("Files not sent properly");
  }
  if (
    !fs.existsSync(req.body.audio_path) ||
    !fs.existsSync(req.body.image_path)
  ) {
    return res.status(400).send("Files not found");
  }
  let url = ngrok_URL;
  const formData = new FormData();
  formData.append("file", fs.createReadStream(req.body.image_path));
  try {
    console.log("Beginning");
    const getFile = await axios.post(url, formData, {
      headers: {
        ...formData.getHeaders(),
      },
    });
    console.log(getFile.data);
    const interm_path = "./uploads/interm.mp4";
    const file = fs.createWriteStream(interm_path);
    const request = http.get(url + "uploads/result.mp4", function (response) {
      response.pipe(file);
      // after download completed close filestream
      file.on("finish", () => {
        console.log("Lipsyncing");
        file.close();
        console.log("Download of result Completed");
        axios.post(url + "del_result");

        const url2 = "http://canvas.iiit.ac.in/lipsyncuc3/predict";
        const curl = new Curl();
        const close = curl.close.bind(curl);

        curl.setOpt(Curl.option.URL, url2);
        curl.setOpt(Curl.option.HTTPHEADER, [
          "Content-type: multipart/form-data",
          "Authorization: bearer " + cur_token,
          "accept: application/json",
        ]);

        const audio_path = req.body.audio_path;
        const video_path = interm_path;
        if (!fs.existsSync(audio_path) || !fs.existsSync(video_path)) {
          res.status(400).send("File not found");
          return;
        }
        curl.setOpt(Curl.option.HTTPPOST, [
          { name: "audio", file: "./" + audio_path },
          { name: "video", file: "./" + video_path },
        ]);

        curl.on("end", function (statusCode, body, headers) {
          console.log("Status:", statusCode);
          if (parseInt(statusCode) === 401) {
            console.log("Please try again");
            login();
          }
          console.log("Headers:", headers);
          console.log("Body:", body);
          var obj = JSON.parse(body);
          var keys = Object.keys(obj);
          console.log("Now printing just the url");
          ensure_login();
          const final_name = uuid();
          let saved_url =
            "uploads/" + req.user.id + "/results/" + final_name + ".mp4";
          ensureDirectoryExistence(saved_url);
          const final_result = fs.createWriteStream("./" + saved_url);
          const request2 = http.get(obj[keys[0]], function (response) {
            http.get(response.headers.location, (res2) => {
              res2.pipe(final_result);
              // after download completed close filestream
              final_result.on("finish", () => {
                final_result.close();
                console.log("Download Completed");
                console.log(obj[keys[0]]);
                console.log("Printing over");
                var obj2 = { url: "http://localhost:4000/" + saved_url };
                const newResult = new Result({
                  id: uuid(),
                  name: req.body.name ? req.body.name : final_name,
                  path: saved_url,
                  user: req.user.id,
                });

                console.log(newResult);
                newResult
                  .save()
                  .then((final_result) => {
                    res.status(200).json(obj2);
                    close();
                  })
                  .catch((err) => {
                    console.log(err);
                    res.status(400).send(err);
                  });
              });
            });
          });
        });
        curl.on("error", function (err) {
          console.log("error", err);
          console.log("NOOO");
          close();
        });
        curl.perform();
        console.log("Over");
      });
    });
  } catch (e) {
    // console.log(e, "getFileError");
    res.status(400).send(e);
  }
});

export default router;
