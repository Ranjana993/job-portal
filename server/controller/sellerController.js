const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const seller = require("../models/sellerModel")
// Assuming you have a User model set up// Assuming you have a User model set up

const register = async (req, res) => {
  try {
    const { email, fullName, contactNumber, companyName, location, buisnessCategory, description, password } = req.body;

    // Validate input
    if (!email || !fullName || !contactNumber || !companyName || !location || !buisnessCategory || !description || !password) {
      return res.status(400).json({
        message: "Please fill all the required fields"
      });
    }

    // Check if user already exists
    const existingUser = await seller.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User with this email already exists"
      });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new seller({
      email,
      fullName,
      contactNumber,
      companyName,
      location,
      buisnessCategory,
      description,
      password: hashedPassword
    });

    console.log("newUser...", newUser);
    // Save user to the database
    await newUser.save();

    // Generate JWT token
    const payload = {
      user: {
        id: newUser.id
      }
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '3h' },
      (err, token) => {
        if (err) throw err;
        res.status(201).json({
          token
        });
      }
    );

    return res.status(200).json({
      message: "User successfully registered ", newUser
    })
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Something went wrong while registering to seller ');
  }
};



const signinAsASeller = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        message: "Please provide both email and password"
      });
    }

    // Check if user exists
    const user = await seller.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password"
      });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email or password"
      });
    }
    res.status(200).json({ message: "registered successfully ", success: true, user });
    
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};



module.exports = {
  register, signinAsASeller
};
