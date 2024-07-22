const express = require("express");
const upload = require("../middleware/multer");
const { getJobs, getAllJobPosted, getJobById, uploadingJob, editJob, deleteJob, } = require("../controller/jobController");
const router = express.Router();


router.get("/get-jobs", getJobs)
router.get("/get-seller-product/:id", getAllJobPosted)
router.get('/get-products/:id', getJobById);
router.post('/upload-product', upload.single('companyLogo'), uploadingJob);

router.put("/edit-product/:id", editJob)
router.delete("/delete-product/:id", deleteJob)

module.exports = router