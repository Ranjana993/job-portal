import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Creatable from 'react-select/creatable';
import { toast } from "react-hot-toast";
import axios from 'axios';

const PostJob = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [selectedSkills, setSelectedSkills] = useState([]);
  const jobPosterID = localStorage.getItem('Job-Poster');
  const [formData, setFormData] = useState({
    id: '',
    companyLogo: '',
    companyName: '',
    jobTitle: '',
    minPrice: '',
    maxPrice: '',
    salaryType: '',
    jobLocation: '',
    postingDate: '',
    experienceLevel: '',
    employmentType: '',
    description: '',
    postedBy: ''
  });

  const options = [
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'HTML', label: 'HTML' },
    { value: 'vanillaJs', label: 'vanillaJs' },
    { value: 'React.js', label: 'React.js' },
    { value: 'Node.js', label: 'Node.js' },
    { value: 'Express.js', label: 'Express.js' },
    { value: 'C++', label: 'C++' },
    { value: 'CSS', label: 'CSS' },
    { value: 'MongoDB', label: 'MongoDB' },
  ];

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (data) => {
    const skills = selectedSkills.map(skill => skill.value);
    
    const formDataToSend = new FormData();
    formDataToSend.append('id', data.id);
    formDataToSend.append('companyLogo', data.companyLogo);
    formDataToSend.append('companyName', data.companyName);
    formDataToSend.append('jobTitle', data.jobTitle);
    formDataToSend.append('minPrice', data.minPrice);
    formDataToSend.append('maxPrice', data.maxPrice);
    formDataToSend.append('salaryType', data.salaryType);
    formDataToSend.append('jobLocation', data.jobLocation);
    formDataToSend.append('postingDate', data.postingDate);
    formDataToSend.append('experienceLevel', data.experienceLevel);
    formDataToSend.append('employmentType', data.employmentType);
    formDataToSend.append('description', data.description);
    formDataToSend.append('skills', JSON.stringify(skills));
    formDataToSend.append('postedBy', data.postedBy);
    formDataToSend.append('user', jobPosterID);

    // const token = localStorage.getItem('Job-Poster');
    console.log(data);
    try {
      await axios.post('http://localhost:9000/post-job', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
          // Authorization: `Bearer ${token}`
        }
      });
      toast.success("Job posted successfully");
    } catch (error) {
      toast.error("Failed to post job");
      console.error(error);
    }
  };

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
      <div className='bg-[#FAFAFAFA] py-10 px-4 lg:px-16'>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
          {/* 1st row */}
          <div className='create-job-flex'>
            <div className='w-full lg:w-1/2 '>
              <label className='block mb-2 text-lg'>Job Title</label>
              <input type='text' placeholder={"Web Developer"} {...register("jobTitle")} className='create-job-input' onChange={handleFormChange} />
            </div>
            <div className='w-full lg:w-1/2 '>
              <label className='block mb-2 text-lg'>Company Name</label>
              <input type='text' placeholder='eg. Microsoft' {...register("companyName")} className='create-job-input' onChange={handleFormChange} />
            </div>
          </div>

          {/* 2nd row */}
          <div className='create-job-flex'>
            <div className='w-full lg:w-1/2 '>
              <label className='block mb-2 text-lg'>Minimum Salary</label>
              <input type='text' placeholder={"$23K"} {...register("minPrice")} className='create-job-input' onChange={handleFormChange} />
            </div>
            <div className='w-full lg:w-1/2 '>
              <label className='block mb-2 text-lg'>Maximum Salary</label>
              <input type='text' placeholder='eg. $90K' {...register("maxPrice")} className='create-job-input' onChange={handleFormChange} />
            </div>
          </div>

          {/* 3rd row */}
          <div className='create-job-flex'>
            <div className='w-full lg:w-1/2 '>
              <label className='block mb-2 text-lg'>Salary Type</label>
              <select {...register("salaryType")} className='create-job-input' onChange={handleFormChange}>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
                <option value="Hourly">Hourly</option>
              </select>
            </div>
            <div className='w-full lg:w-1/2 '>
              <label className='block mb-2 text-lg'>Job Location</label>
              <input type='text' placeholder='eg. Brussels' {...register("jobLocation")} className='create-job-input' onChange={handleFormChange} />
            </div>
          </div>

          {/* 4th row */}
          <div className='create-job-flex'>
            <div className='w-full lg:w-1/2 '>
              <label className='block mb-2 text-lg'>Job Posting Date</label>
              <input type='date' placeholder='eg. 2024-07-20' {...register("postingDate")} className='create-job-input' onChange={handleFormChange} />
            </div>
            <div className='w-full lg:w-1/2 '>
              <label className='block mb-2 text-lg'>Experience Level</label>
              <select {...register("experienceLevel")} className='create-job-input' onChange={handleFormChange}>
                <option value="">Choose Experience</option>
                <option value="No experience">No experience</option>
                <option value="Internship">Internship</option>
                <option value="Work remotely">Work remotely</option>
              </select>
            </div>
          </div>

          {/* 5th row */}
          <div className='create-job-flex'>
            <label className='block mb-2 text-lg'>Choose your skill set</label>
            <Creatable
              value={selectedSkills}
              onChange={setSelectedSkills}
              isMulti
              options={options}
              className='create-job-input'
            />
          </div>

          {/* 6th row */}
          <div className='create-job-flex'>
            <div className='w-full lg:w-1/2 '>
              <label className='block mb-2 text-lg'>Company Logo</label>
              <input type='text' placeholder='URL of Company Logo' {...register("companyLogo")} className='create-job-input' onChange={handleFormChange} />
            </div>
            <div className='w-full lg:w-1/2 '>
              <label className='block mb-2 text-lg'>Employment Type</label>
              <select {...register("employmentType")} className='create-job-input' onChange={handleFormChange}>
                <option value="">Choose Employment Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>
          </div>

          {/* 7th row */}
          <div className='w-full'>
            <label>Job Description</label>
            <textarea {...register("description")} rows={5} placeholder='Job description' className='w-full pl-3 py-1.5 focus:outline-none' onChange={handleFormChange} />
          </div>

          {/* last row */}
          <div className='create-job-flex'>
            <div className='w-full lg:w-1/2 '>
              <label> Job posted by </label>
              <input type='email' placeholder='youremail@gmail.com' {...register("postedBy")} className='create-job-input' onChange={handleFormChange} />
            </div>
            <div className='w-full lg:w-1/2 '>
              <label> Job number </label>
              <input type='text' placeholder='start after 13 ' {...register("id")} className='create-job-input' onChange={handleFormChange} />
            </div>
          </div>

          <input type="submit" className='block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer' />
        </form>
      </div>
    </div>
  );
};

export default PostJob;
