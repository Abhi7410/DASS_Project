import jwt from "jsonwebtoken";

const JWT_SECRET = "sl_myJwtSecret";

export default (req, res, next) => {
  const token = req.header("x-access-token");

  // Check for token
  if (!token)
    return res.status(401).json({ msg: "No token, authorization denied" });

  try {
    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);
    // Add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: "Token is not valid" });
  }
};
