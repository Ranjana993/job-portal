import React from 'react'
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6"

const Newsletter = () => {
  return (
    <div>
      <div>
        <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
          <FaEnvelopeOpenText />
          Email me for Jobs
        </h3>
        <p className='text-primary/70 text-base mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, repudiandae!</p>
        <div className='w-full space-y-4'>
          <input type="email" name='email' id='email' placeholder='name@gmail.com' className='w-full block py-2 pl-3 border focus-within:outline-none' />
          <input type="submit" value={"Subscribe"} className='w-full block py-2 pl-3 border focus-within:outline-none bg-blue rounded-md text-white cursor-pointer font-semibold' />
        </div>
      </div>

      {/* second part  */}
      <div className='mt-24'>
        <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
          <FaRocket />
          Get Noticed faster
        </h3>
        <p className='text-primary/70 text-base mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, repudiandae!</p>
        <div className='w-full space-y-4'>
          <input type="submit" value={"Upload Your Resume"} className='w-full block py-2 pl-3 border focus-within:outline-none bg-blue rounded-md text-white cursor-pointer font-semibold' />
        </div>
      </div>
    </div>
  )
}

export default Newsletter