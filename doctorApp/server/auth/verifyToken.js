const jwt = require("jsonwebtoken");
const Doctor = require("../models/doctorSchema");
const User = require("../models/userSchema");

const authenticate = async (req, res, next) => {
  const authToken = req.headers.authorization;

  // Check if token exists
  if (!authToken || !authToken.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ success: false, message: "No token; authorization denied" });
  }

  const token = authToken.split(" ")[1];

  try {
    // Verify the token
    const decoded = jwt.verify(token, "Admin123@");

    const doctor = await Doctor.findById(decoded.userId);

    if (!doctor) {
      return res
        .status(401)
        .json({ success: false, message: "User not found" });
    }

    next();
  } catch (err) {
    return res
      .status(401)
      .json({ success: false, message: "Token is invalid" });
  }
};

const restrict = (roles) => async (req, res, next) => {
  const userId = req.userId;
  let user;

  const patient = await User.findById(userId);
  const doctor = await Doctor.findById(userId);

  if (patient) {
    user = patient;
  }
  if (doctor) {
    user = doctor;
  }
  if (!roles.includes(user.role)) {
    return res
      .status(401)
      .json({ success: false, message: "You are not authorized" });
  }
  next();
};

module.exports = { authenticate, restrict };
