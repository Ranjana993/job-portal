import React, { useEffect, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import axios from 'axios';
import toast from "react-hot-toast";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sellertoken, setSellerToken] = useState(null);
  const [usertoken, setUserToken] = useState(null);

  const toggler = () => setIsMenuOpen(!isMenuOpen);
  const navPath = [
    { path: "/", title: "Start a search" },
    { path: "/my-job", title: "My jobs" },
    { path: "/sellery", title: "Sellery Estimated" },
    { path: "/post-job", title: "Post a job" },
  ];

  useEffect(() => {
    const storedSellerToken = localStorage.getItem('seller-token');
    setSellerToken(storedSellerToken);
  }, []);

  useEffect(() => {
    const storedUserToken = localStorage.getItem('user-Token');
    setUserToken(storedUserToken);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleUserSignOut = async (e) => {
    e.preventDefault();
    localStorage.removeItem('user-Token');
    setUserToken(null);
    toast.success("Successfully logged out");
    try {
      const res = await axios.post("https://solesphere.onrender.com/logout");
      console.log("Signout==>", res);
      toast.success("Successfully logged out");
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  const handleSellerSignOut = async (e) => {
    e.preventDefault();
    localStorage.removeItem('seller-token');
    setSellerToken(null);
    toast.success("Successfully logged out");
    try {
      const res = await axios.post("https://solesphere.onrender.com/logout");
      console.log("Signout==>", res);
      toast.success("Successfully logged out");
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

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
            {navPath.map(({ path, title }) => (
              <li key={path} className='text-base text-primary'>
                <NavLink
                  to={path}
                  className={({ isActive }) => isActive ? "active" : ""}
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* signup and login button */}
          <div className='text-base text-primary font-medium space-x-5 hidden lg:block'>
            {usertoken || sellertoken ? (
              <button
                onClick={usertoken ? handleUserSignOut : handleSellerSignOut}
                className='py-2 px-5 border rounded bg-blue text-white'
              >
                Logout
              </button>
            ) : (
              <>
                <Link to={"/signin"} className='py-2 px-5 border rounded'> Login </Link>
                <Link to={"/signup"} className='py-2 px-5 border rounded bg-blue text-white'> Sign Up </Link>
              </>
            )}
          </div>

          {/* mobile menu */}
          <div className='md:hidden block'>
            <button onClick={toggler}>
              {isMenuOpen ? < FaXmark className='w-5 h-5 text-primary ' /> : <FaBars className='w-5 h-5 text-primary ' />}
            </button>
          </div>
        </nav>

        {/* Nav items for mobile */}
        <div className={`px-4 bg-black py-5 rounded-sm text-base ${isMenuOpen ? "" : "hidden"}`}>
          <ul>
            {navPath.map(({ path, title }) => (
              <li key={path} className='text-base text-white py-1 first-letter:text-white'>
                <NavLink
                  to={path}
                  className={({ isActive }) => isActive ? "active" : "text-gray-200"}
                >
                  {title}
                </NavLink>
              </li>
            ))}
            {usertoken || sellertoken ? (
              <li>
                <button
                  onClick={usertoken ? handleUserSignOut : handleSellerSignOut}
                  className='py-2 text-white'
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li><Link to={"/signin"} className='py-2 text-white'> Login </Link></li>
                <li><Link to={"/signup"} className='py-2 text-white'> Sign Up </Link></li>
              </>
            )}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
