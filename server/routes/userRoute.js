const express = require("express");
const { signupUser, signinUser } = require("../controller/userController");
const authenticateToken = require("../middleware/authenticationUser");
const { registerAsAjobPoster, signinAsjobPoster } = require("../controller/jobPosterController");
const router = express.Router();

router.post("/signup", signupUser);
router.post("/signin", signinUser);





//! SELLER REGISTRATION DETAILS .
router.post("/register-as-a-jobposter", registerAsAjobPoster)
router.post("/signin-as-a-jobposter", signinAsjobPoster)

router.get('/dashboard', authenticateToken, (req, res) => {
  res.status(200).json({ msg: "Welcome to the dashboard", user: req.user });
});

module.exports = router