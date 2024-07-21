const User = require("../models/userModel");
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');


const signupUser = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, password, contactNo } = req.body;

    if (!username || !email || !password || !contactNo) {
      return res.status(403).json({ msg: "Please provide all credentials..." });
    }

    const isExist = await User.findOne({ email });

    if (isExist) {
      return res.status(402).json({ msg: "User already exists. Please go to sign in." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance with the User model
    const newUser = await new User({ username, email, password: hashedPassword, contactNo }).save();
    console.log(newUser);

    return res.status(200).json({ msg: "User successfully created...", newUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Something went wrong on the backend side while registering up the user." });
  }
};


const signinUser = async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(403).json({ msg: "User not found, please register" });
    }

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(403).json({ msg: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordValid) {
      return res.status(403).json({ msg: "Invalid credentials" });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: existingUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log("token", token);
    res.cookie('token', token, { httpOnly: true });
    return res.status(200).json({ msg: "Sign-in successful", token });

  } catch (error) {
    console.error("error=====", error);
    return res.status(500).json({ msg: "Something went wrong on the backend side while signing in the user." });
  }
}

const logout = (req, res) => {
  try {
    const cookieOptions = {
      expires: new Date(0),
      httpOnly: true
    };

    res.clearCookie('token', cookieOptions);

    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');

    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to log out", error: error.message });
  }
}


module.exports = { signupUser, signinUser, logout }