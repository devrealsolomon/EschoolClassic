const express = require("express");
const router = express.Router();
const { authenticateAdmin } = require("../middlewares/authentication");
const {
  createUser,
  login,
  logout,
  updateUser,
  getCurrentUser,
} = require("../controllers/adminController");

router.post("/register", createUser);
router.post("/login", login);
router.post("/login", login);
router.route("/update").put(authenticateAdmin, updateUser);
router.route("/getcurrent").get(authenticateAdmin, getCurrentUser);
router.post("/logout", logout);
module.exports = router;
