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

  try {
    const token = authToken.split(" ")[1];
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.userId = decoded.id
    req.role = decoded.role


    next();
  } catch (err) {
    if(err.name === 'TokenExpiredError'){
      return res.status(401).json({messabe:'Token is expired'})
    }
    return res.status(401).json({success:false, message:'Invalid token'})
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
