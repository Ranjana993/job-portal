// import mongoose from "mongoose";
const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    id: { type: String },
    companyName: { type: String },
    jobTitle: { type: String },
    companyLogo: { type: String },
    minPrice: { type: String },
    maxPrice: { type: String },
    salaryType: { type: String },
    jobLocation: { type: String },
    postingDate: { type: String },
    experienceLevel: { type: String },
    employmentType: { type: String },
    description: { type: String },
    user: [
        {
            type: mongoose.Types.ObjectId,
            ref: "seller"
        }
    ]
})

const productModel = mongoose.model("productModel", ProductSchema);
module.exports = productModel;