import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";




const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggler = () => setIsMenuOpen(!isMenuOpen)
  const navPath = [
    { path: "/", title: " Start a search " },
    { path: "/my-job", title: "My jobs " },
    { path: "/sellery", title: "Sellery Estimated " },
    { path: "/post-job", title: "Post a job" },
  ]

  return (
    <>
      <header className='max-w-screen-2xl container mx-auto xl:px-24 px-4 '>
        <nav className='flex justify-between items-center py-6'>
          <a href="/">
            <span className='bg-blue p-1 h-2 w-4 rounded-full'>.</span>
            <span> Job Portal </span>
          </a>

          {/* nav items for large devices */}
          <ul className='hidden md:flex gap-12 '>
            {
              navPath.map(({ path, title }) => (
                <li key={path} className='text-base text-primary'>
                  <NavLink
                    to={path}
                    className={({ isActive }) => isActive ? "active" : ""
                    }
                  >
                    {title}
                  </NavLink>
                </li>
              ))
            }
          </ul>

          {/* signup and login button */}
          <div className='text-base text-primary font-medium space-x-5 hidden lg:block'>
            <Link to={"/signin"} className='py-2 px-5 border rounded'> Login </Link>
            <Link to={"/signup"} className='py-2 px-5 border rounded bg-blue text-white'> Sign Up </Link>
          </div>



          {/* mobile  menu */}
          <div className='md:hidden block '>
            <button onClick={toggler}>
              {
                isMenuOpen ? < FaXmark className='w-5 h-5 text-primary ' /> : <FaBars className='w-5 h-5 text-primary ' />
              }
            </button>
          </div>
        </nav>
        {/* Nav items for mobile */}
        <div className={`px-4 bg-black py-5 rounded-sm text-base ${isMenuOpen?"":"hidden" }`}>
          <ul>
            {
              navPath.map(({ path, title }) => (
                <li key={path} className='text-base text-white py-1 first-letter:text-white'>
                  <NavLink
                    to={path}
                    className={({ isActive }) => isActive ? "active" : "text-gray-200"
                    }
                  >
                    {title}
                  </NavLink>
                </li>
              ))
            }
            <li><Link to={"/signin"} className='py-2 text-white '> Login </Link></li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Navbar