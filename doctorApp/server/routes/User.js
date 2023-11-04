const express = require("express");
const router = express.Router();
const {
  updateUser,
  deleteUser,
  getSingleUser,
  getAllUser,
  getUserProfile,
  getMyAppointments,
} = require("../controllers/userController");

const { authenticate, restrict } = require("../auth/verifyToken");

// Update a user
router.put("/:id", authenticate, restrict(["patient"]), updateUser);

// Delete a user
router.delete("/:id", authenticate, restrict(["patient"]), deleteUser);

// Get a single user
router.get("/:id", authenticate, restrict(["patient"]), getSingleUser);

// Get all users
router.get("/", authenticate, restrict(["admin"]), getAllUser);

router.get("/profile/me", authenticate, restrict(["patient"]), getUserProfile);

router.get(
  "/appointments/my-appointments",
  authenticate,
  restrict(["patient"]),
  getMyAppointments
);

module.exports = router;
