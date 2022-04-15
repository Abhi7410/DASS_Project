const setProfilePic = (req, res, next) => {
  console.log(req.files);

  res.status(200).json({ data: req.files });
};
export default setProfilePic;
