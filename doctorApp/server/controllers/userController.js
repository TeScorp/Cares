const User = require("../models/userSchema.js");
const Booking = require("../models/bookingSchema");
const Doctor = require("../models/doctorSchema");

module.exports.updateUser = async (req, res) => {
  const id = req.params.id; // Use req.params.id to access the route parameter

  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updateUser,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to update" });
  }
};

module.exports.deleteUser = async (req, res) => {
  const id = req.params.id; // Use req.params.id to access the route parameter

  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to delete" });
  }
};

module.exports.getSingleUser = async (req, res) => {
  const id = req.params.id; // Use req.params.id to access the route parameter

  try {
    const user = await User.findById(id).select("-password");

    res.status(200).json({
      success: true,
      message: "User found",
      data: user,
    });
  } catch (err) {
    res
      .status(404)
      .json({ success: false, message: "Failed to retrieve user" });
  }
};

module.exports.getAllUser = async (req, res) => {
  try {
    const users = await User.find({}).select("-password");
    res.status(200).json({
      success: true,
      message: "Users found",
      data: users,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "No user found" });
  }
};

module.exports.getUserProfile = async (req, res) => {
  const userId = req.userId;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const { password, ...rest } = user._doc;

    res.status(200).json({
      success: true,
      message: "Profile info is getting",
      data: { ...rest },
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error in fetching profile information.",
    });
  }
};

module.exports.getMyAppointments = async (req, res) => {
  try {
    // Extract doctor ids from appointments
    const bookings = await Booking.find({ user: req.userId });
    // Extract doctor ids from appointment bookings
    const doctorIds = bookings.map((el) => el.doctorId); // Change to "doctorId" from "doctor.Id"
    // Retrieve doctors using doctor ids
    const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select(
      "-password"
    );

    res.status(200).json({
      success: true,
      message: "Appointments are getting",
      data: doctors,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Something went wrong, cannot get." });
  }
};
