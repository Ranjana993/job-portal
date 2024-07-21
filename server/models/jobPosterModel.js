const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
  email: { type: String, required: true, },
  password: { type: String, required: true, },
  fullName: { type: String, required: true, },
  contactNumber: { type: Number, required: true, },
  companyName: { type: String, required: true, },
  location: { type: String, },
  buisnessCategory: { type: String, required: true },
  description: { type: String, required: true },
  is_verified: { type: Number, default: 0 },
  products: [
    {
      type: mongoose.Types.ObjectId,
      ref: "productModel"
    }
  ]
})



const seller = new mongoose.model('seller', sellerSchema)
module.exports = seller