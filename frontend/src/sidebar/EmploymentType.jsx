import React from 'react'
import InputField from '../Components/InputField'

const EmploymentType = ({ handleChange }) => {
  return (
    <div>
      <h4 className='text-lg font-bold mb-2 '>Employment Type</h4>
      <div>
        <label className='sidebar-label-container'>
          <input type="radio" name='test' id='test' value={""} onChange={handleChange} />
          <span className='checkmark'></span>Any Experience
        </label>
        <InputField handleChange={handleChange} value={"Part-time"} title={"Part-time"} name="test" />

        <InputField handleChange={handleChange} value={"Full-time"} title={"Full-time"} name="test" />
        <InputField handleChange={handleChange} value={"Temporary"} title={"Temporary"} name="test" />
      </div>
    </div>
  )
}

export default EmploymentType