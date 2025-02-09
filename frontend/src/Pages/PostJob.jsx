import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Creatable from 'react-select/creatable';
import { toast } from "react-hot-toast";
import axios from 'axios';

const PostJob = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [selectedSkills, setSelectedSkills] = useState([]);
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
    formDataToSend.append('id', formData.id);
    formDataToSend.append('companyLogo', formData.companyLogo);
    formDataToSend.append('companyName', formData.companyName);
    formDataToSend.append('jobTitle', formData.jobTitle);
    formDataToSend.append('minPrice', formData.minPrice);
    formDataToSend.append('maxPrice', formData.maxPrice);
    formDataToSend.append('salaryType', formData.salaryType);
    formDataToSend.append('jobLocation', formData.jobLocation);
    formDataToSend.append('postingDate', formData.postingDate);
    formDataToSend.append('experienceLevel', formData.experienceLevel);
    formDataToSend.append('employmentType', formData.employmentType);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('skills', JSON.stringify(skills));
    formDataToSend.append('postedBy', formData.postedBy);

    // const token = localStorage.getItem('token');

    // try {
    //   await axios.post('http://localhost:9000/post-job', formDataToSend, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //       Authorization: `Bearer ${token}`
    //     }
    //   });
    //   toast.success("Job posted successfully");
    // } catch (error) {
    //   toast.error("Failed to post job");
    //   console.error(error);
  //   }
  };


  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
      <div className='bg-[#FAFAFAFA] py-10 px-4 lg:px-16'>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
          {/* 1st row */}
          <div className='create-job-flex'>
            <div className='w-full lg:w-1/2 '>
              <label className='block mb-2 text-lg'>Job Title</label>
              <input type='text' placeholder={"Web Developer"} {...register("jobTitle", { required: true })} className='create-job-input' />
              {errors.jobTitle && <p className='text-red-500'>Job Title is required</p>}
            </div>
            <div className='w-full lg:w-1/2 '>
              <label className='block mb-2 text-lg'>Company Name</label>
              <input type='text' placeholder='eg. microsoft' {...register("companyName", { required: true })} className='create-job-input' />
              {errors.companyName && <p className='text-red-500'>Company Name is required</p>}
            </div>
          </div>

          {/* 2nd row */}
          <div className='create-job-flex'>
            <div className='w-full lg:w-1/2 '>
              <label className='block mb-2 text-lg'>Minimum Salary</label>
              <input type='text' placeholder={"$23K"} {...register("minPrice", { required: true })} className='create-job-input' />
              {errors.minPrice && <p className='text-red-500'>Minimum Salary is required</p>}
            </div>
            <div className='w-full lg:w-1/2 '>
              <label className='block mb-2 text-lg'>Maximum Salary</label>
              <input type='text' placeholder='eg. $90k' {...register("maxPrice", { required: true })} className='create-job-input' />
              {errors.maxPrice && <p className='text-red-500'>Maximum Salary is required</p>}
            </div>
          </div>

          {/* 3rd row */}
          <div className='create-job-flex'>
            <div className='w-full lg:w-1/2 '>
              <label className='block mb-2 text-lg'>Salary Type</label>
              <select {...register("salaryType", { required: true })} className='create-job-input'>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
                <option value="Hourly">Hourly</option>
              </select>
              {errors.salaryType && <p className='text-red-500'>Salary Type is required</p>}
            </div>
            <div className='w-full lg:w-1/2 '>
              <label className='block mb-2 text-lg'>Job Location</label>
              <input type='text' placeholder='eg. Brussels' {...register("jobLocation", { required: true })} className='create-job-input' />
              {errors.jobLocation && <p className='text-red-500'>Job Location is required</p>}
            </div>
          </div>

          {/* 4th row */}
          <div className='create-job-flex'>
            <div className='w-full lg:w-1/2 '>
              <label className='block mb-2 text-lg'>Job Posting Date</label>
              <input type='date' placeholder='eg. 2024-07-20' {...register("postingDate", { required: true })} className='create-job-input' />
              {errors.postingDate && <p className='text-red-500'>Job Posting Date is required</p>}
            </div>
            <div className='w-full lg:w-1/2 '>
              <label className='block mb-2 text-lg'>Experience Level</label>
              <select {...register("experienceLevel", { required: true })} className='create-job-input'>
                <option value="">Choose Experience</option>
                <option value="No experience">No experience</option>
                <option value="Internship">Internship</option>
                <option value="Work remotely">Work remotely</option>
              </select>
              {errors.experienceLevel && <p className='text-red-500'>Experience Level is required</p>}
            </div>
          </div>

          {/* 5th row */}
          <div className='create-job-flex'>
            <label className='block mb-2 text-lg'>Choose your skillSet</label>
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
              <label className='block mb-2 text-lg'>Company Logo </label>
              <input type='text' placeholder='eg. url' {...register("companyLogo", { required: true })} className='create-job-input' />
              {errors.companyLogo && <p className='text-red-500'>Company Logo URL is required</p>}
            </div>
            <div className='w-full lg:w-1/2 '>
              <label className='block mb-2 text-lg'>Employment Type</label>
              <select {...register("employmentType", { required: true })} className='create-job-input'>
                <option value="">Choose Employment Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Temporary">Temporary</option>
              </select>
              {errors.employmentType && <p className='text-red-500'>Employment Type is required</p>}
            </div>
          </div>

          {/* 7th row */}
          <div className='w-full'>
            <label>Job Description</label>
            <textarea {...register("description", { required: true })} rows={5} placeholder='job description' className='w-full pl-3 py-1.5 focus:outline-none' />
            {errors.description && <p className='text-red-500'>Job Description is required</p>}
          </div>

          {/* last row */}
          <div className='create-job-flex'>
            <div className='w-full lg:w-1/2 '>
              <label> Job posted by </label>
              <input type='email' placeholder='youremail@gmail.com' {...register("postedBy", { required: true })} className='create-job-input' />
              {errors.postedBy && <p className='text-red-500'>Email is required</p>}
            </div>
            <div className='w-full lg:w-1/2 '>
              <label> Job number </label>
              <input type='text' placeholder='start after 13 ' {...register("id", { required: true })} className='create-job-input' />
              {errors.id && <p className='text-red-500'>Job Number is required</p>}
            </div>
          </div>

          <input type="submit" className='block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer' />
        </form>
      </div>
    </div>
  );
};

export default PostJob;
