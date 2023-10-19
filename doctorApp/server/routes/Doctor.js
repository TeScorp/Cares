const express = require("express");
const router = express.Router();
const {
  updateDoctor,
  deleteDoctor,
  getSingleDoctor,
  getAllDoctor,
  getDoctorProfile,
} = require("../controllers/doctorController");

const { authenticate, restrict } = require("../auth/verifyToken");

const reviewRouter = require("./Review");

//Nested route
router.use("/:doctorId/reviews", reviewRouter);

// Update a user
router.put("/:id", authenticate, restrict(["doctor"]), updateDoctor);

// Delete a user
router.delete("/:id", authenticate, restrict(["doctor"]), deleteDoctor);

// Get a single user
router.get("/:id", getSingleDoctor);

// Get all users
router.get("/", getAllDoctor);

router.get("/profile/me", authenticate, restrict(["doctor"]), getDoctorProfile);

module.exports = router;
