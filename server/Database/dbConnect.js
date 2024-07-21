const mongoose = require("mongoose");

const URL = process.env.URL;

const connectDB = async () => {
    try {
        await mongoose.connect(URL);
        console.log("Successfully connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
};

module.exports = connectDB;
