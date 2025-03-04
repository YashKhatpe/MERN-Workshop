const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET; // Store in .env file

module.exports = function (req, res, next) {
  const token = req.header("Authorization")?.split(" ")[1]; // Extract token after "Bearer"
  if (!token) return res.status(401).json({ msg: "No token, authorization denied" });
  
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded.userId; // Attach user ID to request
    next();
  } catch (err) {
    res.status(401).json({ msg: "Invalid token" });
  }
};
