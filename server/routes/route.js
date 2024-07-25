const express = require("express");
const upload = require("../middleware/multer");
const { getJobs, getAllJobPosted, getJobById, uploadingJob, editJob, deleteJob, } = require("../controller/jobController");
const router = express.Router();


router.get("/get-jobs", getJobs)
router.get("/get-poster-jobs/:id", getAllJobPosted)
router.get('/get-job/:id', getJobById);
router.post('/post-job', upload.single('companyLogo'), uploadingJob);

router.put("/edit-job/:id", editJob)
router.delete("/delete-job/:id", deleteJob)

module.exports = router