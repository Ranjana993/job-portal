import React, { useState } from 'react'
import { FiMapPin, FiSearch } from "react-icons/fi"


const Banner = ({ query, handleChange }) => {



  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14 '>
      <h1 className='text-5xl font-bold text-primary mb-3 '>Find you <span className='text-blue'>new dream </span> job Today </h1>
      <p className='text-lg text-black/70 mb-8 '>Thousand of jobs uin the computer , engineering are waiting to you .</p>
      <form>
        <div className='flex justify-start md:flex-row flex-col md:gap-0 gap-4'>
          <div className='flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2  focus-within:ring-inset focus-within:ring-indigo-500 md:w-1/2 w-full'>
            <input type="text"
              onChange={handleChange}
              value={query}
              name='title' className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder-gray-500  sm:leading-6 focus:right-0' id='title' placeholder='what positions you are looking for ?' />
            <FiSearch className='absolute mt-2.5 ml-2 text-gray-400' />
          </div>
          <div className='flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2  focus-within:ring-inset focus-within:ring-indigo-500 md:w-1/3 w-full'>
            <input type="text"
              onChange={handleChange}
              name='title' className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder-gray-500  sm:leading-6 focus:right-0' id='title' placeholder='Location ?' />
            <FiMapPin className='absolute mt-2.5 ml-2 text-gray-400' />
          </div>
          <button type='submit' className='bg-blue px-8 py-2 text-white md:rounded-s-none rounded'>Search</button>
        </div>
      </form>
    </div>
  )
}

export default Banner