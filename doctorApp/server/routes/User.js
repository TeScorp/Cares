const express = require("express");
const router = express.Router();
const {
  updateUser,
  deleteUser,
  getSingleUser,
  getAllUser,
} = require("../controllers/userController");

const { authenticate, restrict } = require("../auth/verifyToken");

// Update a user
router.put("/users/:id", authenticate, restrict(["patient"]), updateUser);

// Delete a user
router.delete("/users/:id", authenticate, restrict(["patient"]),deleteUser);

// Get a single user
router.get("/users/:id", authenticate, restrict(["patient"]), getSingleUser);

// Get all users
router.get("/users", authenticate, restrict(["admin"]),getAllUser);

module.exports = router;
