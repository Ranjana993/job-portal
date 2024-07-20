import React from 'react'
import InputField from "../Components/InputField"


const JobPostingData = ({ handleChange }) => {
  const now = new Date();

  const twentyFourhourAgo = new Date(now - 24 * 60 * 60 * 1000)
  const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000)
  const thirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000)

// converting date to string

  const twentyFourhourAgoDate = twentyFourhourAgo.toISOString().slice(0,10)
  const sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0, 10)
  const thirtyDaysAgoAgoDate = thirtyDaysAgo.toISOString().slice(0, 10)

  return (
    <div>
      <h4 className='text-lg font-bold mb-2 '>Date of Posting</h4>
      <div>
        <label className='sidebar-label-container'>
          <input type="radio" name='test' id='test' value={""} onChange={handleChange} />
          <span className='checkmark'></span>All Time
        </label>
        <InputField handleChange={handleChange} value={twentyFourhourAgoDate} title={"Last 24 hours"} name="test" />

        <InputField handleChange={handleChange} value={sevenDaysAgoDate} title={"Last 7 Days"} name="test" />
        <InputField handleChange={handleChange} value={thirtyDaysAgoAgoDate} title={"Last Month"} name="test" />
      </div>
    </div>
  )
}

export default JobPostingData