const mongoose = require("mongoose")



const jobSchema = mongoose.Schema({
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
      ref: "User"
    }
  ]
})



const jobModel = mongoose.model("jobModel", jobSchema);
module.exports = jobModel;
