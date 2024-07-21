const cloudinary = require('cloudinary').v2;
const fs = require("fs")
const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET
});


const uploadOnCloudinary = async (localfilePath) => {
  if (!localfilePath) return null;
  try {
    const res = await cloudinary.uploader.upload(localfilePath, { resource_type: "auto" })
    // console.log("file has been uploaded ", res.secure_url);
    return res.secure_url
  }
  catch (error) {
    fs.unlinkSync(localfilePath)
    return null;
  }
  finally {
    fs.unlinkSync(localfilePath)
  }
}

module.exports = uploadOnCloudinary