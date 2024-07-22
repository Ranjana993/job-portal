import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import Creatable from 'react-select/creatable'

const PostJob = () => {
  const [selectedOpts, setSelectedOpts] = useState(null)
  const {  register, formState: { errors }} = useForm()

  const handleSubmit = (data) => {
    data.preventDefault()
    data.skills = setSelectedOpts
    console.log("data" , data);
  }

  const options = [
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'HTML', label: 'HTML' },
    { value: 'vanillaJs', label: 'vanillaJs' },
    { value: 'React.js', label: 'eact.js' },
    { value: 'Node.js', label: 'Node.js' },
    { value: 'Express.js', label: 'Express.js' },
    { value: 'C++', label: 'C++' },
    { value: 'CSS', label: 'CSS' },
    { value: 'MongoDB', label: 'MongoDB' },
  ]

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
      {/* form */}
      <div className='bg-[#FAFAFAFA] py-10 px-4 lg:px-16'>
        <form onSubmit={handleSubmit} className='space-y-5'>
          {/* 1st row */}
          <div className='create-job-flex'>

            {/* 1st row */}
            <div className='w-full lg:w-1/2 '>
              <label className='block mb-2 text-lg'>Job Title</label>
              <input type='text' defaultValue={"Web Developer "} {...register("jobTitle")} className='create-job-input' />
            </div>

            {/* 2nd row */}
            <div className='w-full lg:w-1/2 '>
              <label className='block mb-2 text-lg'>Company Name</label>
              <input type='text' placeholder='eg. microsoft' {...register("companyName")} className='create-job-input' />
            </div>
          </div>

          {/* 2nd row */}
          <div className='create-job-flex'>
            <div className='w-full lg:w-1/2 '>
              <label className='block mb-2 text-lg'>Minimum Salary</label>
              <input type='text' defaultValue={"$23K "} {...register("minPrice")} className='create-job-input' />
            </div>
            <div className='w-full lg:w-1/2 '>
              <label className='block mb-2 text-lg'>Maximum Salary</label>
              <input type='text' placeholder='eg. $90k' {...register("maxPrice")} className='create-job-input' />
            </div>
          </div>

          {/* 3rd row */}
          <div className='create-job-flex'>
            <div className='w-full lg:w-1/2 '>
              <label className='block mb-2 text-lg'>Salary Type</label>
              <select {...register("salaryType")} className='create-job-input'>
                <option value="Monthly">female</option>
                <option value="Yearly">male</option>
                <option value="Hourly">other</option>
              </select>
            </div>
            <div className='w-full lg:w-1/2 '>
              <label className='block mb-2 text-lg'>Job Location</label>
              <input type='text' placeholder='eg. Brussels' {...register("jobLocation")} className='create-job-input' />
            </div>
          </div>

          {/* 4th row */}
          <div className='create-job-flex'>
            <div className='w-full lg:w-1/2 '>
              <label className='block mb-2 text-lg'>Job Posting Date</label>
              <input type='date' placeholder='eg. 2024-07-20' {...register("experienceLevel")} className='create-job-input' />
            </div>
            <div className='w-full lg:w-1/2 '>
              <label className='block mb-2 text-lg'>Experience Level</label>
              <select {...register("salaryType")} className='create-job-input'>
                <option value="">Choose Experience</option>
                <option value="No experience">Hourly</option>
                <option value="Internship">Internship</option>
                <option value="Work remotely">Work remotely</option>
              </select>
            </div>

          </div>
          {/* 5th */}
          <div className='create-job-flex'>
            <label className='block mb-2 text-lg'>Choose your skillSet</label>
            <Creatable
              defaultValue={selectedOpts}
              onChange={setSelectedOpts}
              isMulti
              options={options} className='create-job-input' />
          </div>

          {/* 6th row */}
          <div className='create-job-flex'>
            <div className='w-full lg:w-1/2 '>
              <label className='block mb-2 text-lg'>Company Logo </label>
              <input type='text' placeholder='eg. url' {...register("companyLogo")} className='create-job-input' />
            </div>
            <div className='w-full lg:w-1/2 '>
              <label className='block mb-2 text-lg'>Employment Type</label>
              <select {...register("employmentType")} className='create-job-input'>
                <option value="">Choose Experience</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>

          </div>

          {/* 7th  */}
          <div className='w-full'>
            <label>Job Description</label>
            <textarea  {...register("description")} rows={5}
              placeholder='job description' className='w-full pl-3 py-1.5 focus:outline-none' />
          </div>

          {/* last row */}
          <div>
            <label> Job posted by </label>
            <input type='email' placeholder='youremail@gmail.com' {...register("postedBy")} className='create-job-input' />
          </div>
          <input type="submit" className='block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer' />
        </form>
      </div>
    </div>
  )
}

export default PostJob