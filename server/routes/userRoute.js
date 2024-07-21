const express = require("express");
const { signupUser, signinUser, logout } = require("../controller/userController");
const authenticateToken = require("../middleware/authenticationUser");
const { register, signinAsASeller } = require("../controller/sellerController");
const router = express.Router();

router.post("/signup", signupUser);
router.post("/signin", signinUser);





//! SELLER REGISTRATION DETAILS .
router.post("/register-as-a-seller", register)
router.post("/signin-as-a-seller", signinAsASeller)

router.get('/dashboard', authenticateToken, (req, res) => {
  res.status(200).json({ msg: "Welcome to the dashboard", user: req.user });
});

module.exports = router