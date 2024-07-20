import React, { useEffect, useState } from 'react'
import Banner from '../Components/Banner'
import Card from '../Components/Card';
import Jobs from './Jobs';
import Sidebar from '../sidebar/Sidebar';
import Newsletter from '../Components/Newsletter';

const Home = () => {
  const [query, setQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true);
  const [currPage, setCurrPage] = useState(1)
  const itemPerPage = 6;


  const handleQueryChange = (e) => {
    setQuery(e.target.value)
  }

  //loading job data
  useEffect(() => {
    setLoading(true)
    fetch("./jobs.json").then((res) => res.json()).then((data) => setJobs(data))
    setLoading(false)
  }, [])
  console.log(jobs);

  // job filter by job title
  const filteredItems = jobs.filter((job) => (
    job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1))

  // job filter by radio of locations

  // radio based filtering
  const handleChange = (e) => {
    setSelectedCategory(e.target.value)
  }

  // button based filtering
  const handleClick = (e) => {
    setSelectedCategory(e.target.value)
  }

  // calculate the indes range 
  const calculatePageRange = () => {
    const startIndex = (currPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage
    return { startIndex, endIndex }
  }
  // function for the next page
  const nextPage = () => {
    if (currPage < Math.ceil(filteredItems.length / itemPerPage)) {
      setCurrPage(currPage + 1)
    }
  }
  // function for preveious page
  const prevPage = () => {
    if (currPage > 1) {
      setCurrPage(currPage - 1);
    }
  }

  // main function
  const filterData = (jobs, selected, query) => {
    let filterJobs = jobs;
    // filtering inputs items
    if (query) {
      filterJobs = filteredItems
    }
    // category filtering
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

    // slice the data based on curr page

    const { startIndex, endIndex } = calculatePageRange();

    filterJobs = filterJobs.slice(startIndex, endIndex)

    return filterJobs.map((data, i) => <Card key={i} data={data} />)
  }

  const res = filterData(jobs, selectedCategory, query)

  return (
    <>
      <Banner query={query} handleChange={handleQueryChange} />

      {/* main content */}
      <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12 '>
        {/* left side  */}
        <div className='bg-white p-4 rounded '>
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>

        {/* job card center area */}
        <div className='col-span-2 bg-white p-4 rounded'>
          {
            loading ? "Loading..." : res?.length > 0 ? <Jobs res={res} /> : <> <h2 className='text-lg font-bold mb-2'>{res.length} Jobs</h2> <p>No data found :( </p></>
          }

          {/* pagination */}
          {
            res.length > 0 ? (<div className='flex justify-center mt-4 space-x-8'>
              <button onClick={prevPage} disabled={currPage === 1}>Prev</button>
              <span>Page {currPage} of {Math.ceil(filteredItems.length / itemPerPage)}</span>
              <button onClick={nextPage} disabled={currPage === Math.ceil(filteredItems.length / itemPerPage)}>Next</button>
            </div>) : ""
          }
        </div>

        {/* right side  */}
        <div className='bg-white p-4 rounded '>
          <Newsletter />
        </div>

      </div>
    </>
  )
}

export default Home