import aws from "aws-sdk"
import multer from "multer"
import multerS3 from "multer-s3"
import User from "../models/User.js";
// import multer from 

const s3 = new aws.S3({
  accessKeyId: "AKIAYHPA6LXECM6G72LJ",
  secretAccessKey: "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",
  region: "ap-south-1"
});

const upload = (bucketName) =>
  multer({
    storage: multerS3({
      s3: s3,
      bucket: bucketName,
      metadata: function (req, file, cb) {
        cb(null, { fieldName: file.fieldname });
      },
      key: function (req, file, cb) {
        cb(null, `image-${Date.now()}.jpeg`);
      },
    }),
  });
  
const setProfilePic = (req, res, next) => {
  console.log(req.files);
  const uploadSingle = upload("profile-picture-upload-site").single(
    "croppedImage"
  );

  uploadSingle(req, res, async(err) => {
    if (err)
      return res.status(400).json({ success: false, message: err.message });
    
    // await User.create({ photoURL: req.file.location });
  const editProfilePic = (event) => {
      const newProfilePic = {
      photoURL: req.file.location,
      };
      console.log(newProfilePic);
      axios
        .post('http://localhost:4000/user/setProfilePic', newProfilePic, { headers: { 'x-access-token': localStorage.getItem('user') } })
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => console.log(err));
  };
    
    console.log(req.file.location)
    res.status(200).json({ data: req.file.location });

  });
  
};
export default setProfilePic;
