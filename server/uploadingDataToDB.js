const jobs = require("./config/data");
const jobModel = require("./models/jobModel");

const uploadData = async () => {
    try {
        await jobModel.deleteMany();
        await jobModel.insertMany(jobs);
        console.log("Product Saved successfully")
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = uploadData;