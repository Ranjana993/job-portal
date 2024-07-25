const uploadOnCloudinary = require("../config/cloudinary");
const fs = require('fs');
const { default: mongoose } = require("mongoose");
const jobModel = require("../models/jobModel");
const jobPoster = require("../models/jobPosterModel");

// getting all jobslist
const getJobs = async (req, res) => {
    try {
        const jobs = await jobModel.find({});
        return res.status(200).json({ jobs })
    }
    catch (error) {
        return res.status(500).json({ message: "something went wrong while fetching all job list from database " })
    }
}

// getting all seller products 
const getAllJobPosted = async (req, res) => {
    try {
        const jobs = await jobModel.findById(req.params.id).populate("jobModel");
        if (!jobs) {
            return res.status(401).send({ success: false, message: "job not found" })
        }
        return res.status(200).send({ success: true, message: "job  found", jobs })

    }
    catch (error) {
        console.log(error);
        return res.status(400).send({ success: false, message: "Errror in job controller ", error })
    }
}

// getting products by id 
const getJobById = async (req, res) => {
    try {
        const { id } = req.params;
        const job = await jobModel.findById(id);

        if (!job) {
            return res.status(404).json({ message: 'job not found' });
        }

        return res.json({ job });
    } catch (error) {
        console.error('Error fetching job:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Create a new product
const uploadingJob = async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        // Destructure the incoming form data
        const { id, companyName, jobTitle, minPrice, maxPrice, salaryType, jobLocation, postingDate, experienceLevel, employmentType, description,skills } = req.body;

        // Check for duplicate job
        let isExist = await jobModel.findOne({ id: id });
        if (isExist) {
            return res.status(400).json({ error: 'This job already exists' });
        }


        // Get the uploaded file
        const companyLogoFile = req.files && req.files['companyLogo'] ? req.files['companyLogo'][0] : null;
        console.log("companyLogoFile", req.files);
        if (!companyLogoFile) {
            return res.status(400).json({ error: 'Company logo file is required' });
        }

        // Upload file to Cloudinary
        const companyLogoUrl = await uploadOnCloudinary(companyLogoFile.path);
        if (!companyLogoUrl) {
            return res.status(500).json({ error: 'Failed to upload company logo to Cloudinary' });
        }

        // Create new job with the URL from Cloudinary
        const newJob = new jobModel({
            id,
            companyLogo: companyLogoUrl,
            companyName,
            jobTitle,
            minPrice,
            maxPrice,
            salaryType,
            jobLocation,
            postingDate,
            experienceLevel,
            employmentType,
            description,
            skills: Array.isArray(skills) ? skills : skills.split(',').map(skill => skill.trim()), // Ensure skills is an array
            user: [existingUser._id] // Ensure user is correctly linked
        });

        // Save the job and update the user's jobs
        await newJob.save({ session });
        existingUser.jobs.push(newJob._id);
        await existingUser.save({ session });
        await session.commitTransaction();

        res.status(201).json({ message: "Job has been successfully uploaded", newJob });
    } catch (error) {
        await session.abortTransaction();
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    } finally {
        session.endSession();
        if (req.file && req.file.path) {
            fs.unlinkSync(req.file.path);
        }
    }
}


const editJob = async (req, res) => {
    const { id } = req.params;
    console.log("id ", id);

    const job = await jobModel.findById(id);
    if (!job) {
        return res.status(404).json({ message: 'job not found' });
    }

    const { companyName,
        jobTitle,
        minPrice,
        maxPrice,
        salaryType,
        jobLocation,
        postingDate,
        experienceLevel,
        employmentType,
        description } = req.body;

    try {
        let urlImageUrl

        // Handle the file uploads
        if (req.files) {
            const urlFile = req.files['url'] ? req.files['url'][0] : null;

            if (urlFile) {
                urlImageUrl = await uploadOnCloudinary(urlFile.path);
                if (!urlImageUrl) {
                    return res.status(500).json({ error: 'Failed to upload url image to Cloudinary' });
                }
            }
        }

        // Build the update object
        let updateFields = {
            companyName,
            jobTitle,
            minPrice,
            maxPrice,
            salaryType,
            jobLocation,
            postingDate,
            experienceLevel,
            employmentType,
            description };
        if (urlImageUrl) updateFields.url = urlImageUrl;

        console.log("Update fields:", updateFields);

        const updatedJob = await jobModel.findByIdAndUpdate(
            id,
            updateFields,
            { new: true, runValidators: true }
        );

        if (!updatedJob) {
            return res.status(404).json({ message: 'Product not found' });
        }

        console.log("Updated job:", updatedJob);
        res.status(200).json({ message: 'job updated successfully', product: updatedJob });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update product', error: error.message });
    }
};


// DELETE /delete-product/:id
const deleteJob = async (req, res) => {
    const { id } = req.params
    try {
        const job = await jobModel.findByIdAndDelete(id)

        if (!job) {
            return res.status(404).json({ message: 'job not found' })
        }

        res.status(200).json({ message: 'job deleted successfully' })
    } catch (error) {
        console.error('Error deleting job:', error)
        res.status(500).json({ message: 'Server error' })
    }
}

// getting product according to user registered as a seller ...
const posterJobController = async (req, res) => {
    try {
        const userJob = await jobPoster.findById(req.params.id).populate("jobModel");
        if (!userJob) {
            return res.status(401).send({ success: false, message: "Not found" })
        }

        return res.status(200).send({ success: true, message: "Products found", userJob })
    } catch (error) {
        console.log(error);
        return res.status(400).send({ success: false, message: "Errror in userProductController", error })
    }
}



module.exports = {
    getJobs,
    getAllJobPosted,
    getJobById,
    uploadingJob,
    editJob,
    deleteJob,
    posterJobController
} 