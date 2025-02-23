const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: { type: String, required: true, lowercase: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true, unique: true },
    password: { type: String, required: true },
    contactNo: { type: String, required: true }
},
    { timestamps: true }
)
const User = mongoose.model("User", userSchema);

module.exports = User