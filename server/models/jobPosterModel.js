const mongoose = require('mongoose');

const jobPosterSchema = new mongoose.Schema({
  email: { type: String, required: true, },
  password: { type: String, required: true, },
  fullName: { type: String, required: true, },
  contactNumber: { type: Number, required: true, },
  companyName: { type: String, required: true, },
  buisnessCategory: { type: String, required: true },
  description: { type: String, required: true },
  is_verified: { type: Number, default: 0 },
  products: [
    {
      type: mongoose.Types.ObjectId,
      ref: "jobModel"
    }
  ]
})


const jobPoster = new mongoose.model('jobPoster', jobPosterSchema)
module.exports = jobPoster