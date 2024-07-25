const mongoose = require("mongoose");

const jobsSchema = new mongoose.Schema({
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
    skills: [{ type: String }], 
    description: { type: String },
    user: [
        {
            type: mongoose.Types.ObjectId,
            ref: "jobPoster"
        }
    ]
});

const jobModel = mongoose.model("jobModel", jobsSchema);
module.exports = jobModel;
