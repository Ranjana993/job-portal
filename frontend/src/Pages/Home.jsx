import React, { useEffect, useState } from 'react'
import Banner from '../Components/Banner'

const Home = () => {
  const [query, setQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [job, setJobs] = useState([])

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

//loading job data
useEffect(()=>{
fetch("./jobs.json").then((res)=>res.json()).then((data)=>setJobs(data))
},[])
console.log(job);
  return (
    <>
      <Banner query={query} handleChange={handleChange} />
    </>
  )
}

export default Home