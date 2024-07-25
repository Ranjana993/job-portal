// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../Components/Banner';
import Card from '../Components/Card';
import Jobs from './Jobs';
import Sidebar from '../sidebar/Sidebar';
import Newsletter from '../Components/Newsletter';
import { fetchJobs } from '../../redux/slice/jobSlice';

const Home = () => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currPage, setCurrPage] = useState(1);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const itemPerPage = 6;

  const dispatch = useDispatch();
  const { jobs, status, error } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  useEffect(() => {
    const handleOnlineStatus = () => setIsOnline(navigator.onLine);

    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);

    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOnlineStatus);
    };
  }, []);

  const handleQueryChange = (e, type) => {
    if (type === 'query') {
      setQuery(e.target.value);
    } else if (type === 'location') {
      setLocation(e.target.value);
    }
  };

  // Job filter by job title and location
  const filteredItems = jobs.filter((job) =>
    job.jobTitle.toLowerCase().includes(query.toLowerCase()) &&
    job.jobLocation.toLowerCase().includes(location.toLowerCase())
  );

  // Job filter by radio of locations
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Button based filtering
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Calculate the index range
  const calculatePageRange = () => {
    const startIndex = (currPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    return { startIndex, endIndex };
  };

  // Function for the next page
  const nextPage = () => {
    if (currPage < Math.ceil(filteredItems.length / itemPerPage)) {
      setCurrPage(currPage + 1);
    }
  };

  // Function for previous page
  const prevPage = () => {
    if (currPage > 1) {
      setCurrPage(currPage - 1);
    }
  };

  // Main function
  const filterData = (jobs, selected, query, location) => {
    let filterJobs = jobs;
    // Filtering input items
    if (query || location) {
      filterJobs = filteredItems;
    }
    // Category filtering
    if (selected) {
      filterJobs = filterJobs.filter(({ jobLocation, maxPrice, experienceLevel, salaryType, employmentType, postingDate }) => (
        postingDate >= selected ||
        employmentType.toLowerCase() === selected.toLowerCase() ||
        experienceLevel.toLowerCase() === selected.toLowerCase() ||
        jobLocation.toLowerCase() === selected.toLowerCase() ||
        parseInt(maxPrice) <= parseInt(selected) ||
        salaryType.toLowerCase() === selected.toLowerCase() ||
        employmentType.toLowerCase() === selected.toLowerCase()
      ));
    }

    // Slice the data based on curr page
    const { startIndex, endIndex } = calculatePageRange();
    filterJobs = filterJobs.slice(startIndex, endIndex);

    return filterJobs.map((data, i) => <Card key={i} data={data} />);
  };

  const res = filterData(jobs, selectedCategory, query, location);

  return (
    <>
      <Banner query={query} handleChange={handleQueryChange} />

      {/* Offline Message */}
      {!isOnline && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">You&apos;re offline!</strong>
          <span className="block sm:inline"> Please check your internet connection.</span>
        </div>
      )}

      {/* Main content */}
      <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12'>
        {/* Left side */}
        <div className='bg-white p-4 rounded'>
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>

        {/* Job card center area */}
        <div className='col-span-2 bg-white p-4 rounded'>
          {
            status === 'loading' ? "Loading..." :
              status === 'failed' ? <p>Error: {error}</p> :
                res?.length > 0 ? <Jobs res={res} /> :
                  <> <h2 className='text-lg font-bold mb-2'>{res.length} Jobs</h2> <p>No data found :(</p></>
          }

          {/* Pagination */}
          {
            res.length > 0 ? (
              <div className='flex justify-center mt-4 space-x-8'>
                <button onClick={prevPage} disabled={currPage === 1}>Prev</button>
                <span>Page {currPage} of {Math.ceil(filteredItems.length / itemPerPage)}</span>
                <button onClick={nextPage} disabled={currPage === Math.ceil(filteredItems.length / itemPerPage)}>Next</button>
              </div>
            ) : ""
          }
        </div>

        {/* Right side */}
        <div className='bg-white p-4 rounded'>
          <Newsletter />
        </div>
      </div>
    </>
  );
};

export default Home;
