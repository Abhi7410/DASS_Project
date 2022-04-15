import jwt from "jsonwebtoken";
import User from "../models/User.js";
const JWT_SECRET = "sl_myJwtSecret";

export default (req, res, next) => {
  const token = req.header("x-access-token");

  // Check for token
  if (!token)
    return res.status(401).json({ msg: "No token, authorization denied" });

  try {
    // Verify token
    console.log(token);
    const decoded = jwt.verify(token, JWT_SECRET);

    // Add user from payload
    User.findOne({ id: decoded.id }).then((user) => {
      console.log("User" + user);
      if (user == null) {
        return res
          .status(403)
          .json({ msg: "Valid token, but user does not exist!" });
      }
      req.user = user;
      next();
    });
  } catch (e) {
    // console.log("Noo");
    res.status(401).json({ msg: "Token is not valid" });
  }
};
