const express = require("express");
const router = express.Router();
const {
  updateDoctor,
  deleteDoctor,
  getSingleDoctor,
  getAllDoctor,
} = require("../controllers/doctorController");

const { authenticate, restrict } = require("../auth/verifyToken");

// const reviewRouter = require("./Review")

//Nested route
// router.use("/:doctorId/reviews", reviewRouter)

// Update a user
router.put("/doctors/:id",  authenticate, restrict(["doctor"]), updateDoctor);

// Delete a user
router.delete("/doctors/:id",  authenticate, restrict(["doctor"]), deleteDoctor);

// Get a single user
router.get("/doctors/:id", getSingleDoctor);

// Get all users
router.get("/doctors", getAllDoctor);

module.exports = router;
