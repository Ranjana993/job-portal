import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"


const Signup = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    contactNo: ""
  })
  const navigate = useNavigate()
  const onHandleChange = (e) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = await axios.post("https://solesphere-backend12.onrender.com/signup", userData)
    // const data = await axios.post("https:localhost:8000/signup", userData)
    console.log(data?.data)
    navigate("/login")
  }
  return (
    <>
      <div className="py-8">
        <section className="">
          <div className="flex items-center py-1">
            <div className="w-full flex justify-between items-center gap-4">
              <div className="w-[50%] px-12 hidden lg:block">
                <img className="w-full rounded-xl bg-contain" src="https://media.istockphoto.com/id/475352876/photo/man-applying-for-a-job-on-the-internet.jpg?s=612x612&w=0&k=20&c=SQeciz8vqdGWu_KJoGC7yK8xmpBl69UewPtZSyWSrOI=" alt="" />
              </div>
              <div className="w-full lg:w-[50%] ml-2 lg:ml-12 px-4 lg:px-12 space-y-2 md:space-y-2 sm:p-8">
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight font-mono pb-4">Register</h1>
                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username" className="mb-2 text-md font-mono font-bold">Your Full Name</label>
                    <input type="text" name="username" value={userData.username} onChange={onHandleChange} className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg w-[98%] lg:w-[90%] p-2.5 " placeholder="Enter your full name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-mono text-gray-900  font-bold ">Your Email</label>
                    <input type="email" name="email" value={userData.email} onChange={onHandleChange} className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg w-[98%] lg:w-[90%] p-2.5 " placeholder="email@gmail.com" required />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-mono font-bold text-gray-900 ">Password</label>
                    <input type="password" name="password" value={userData.password} onChange={onHandleChange} placeholder="••••••••" className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg w-[98%] lg:w-[90%] p-2.5 " required />
                  </div>
                  <div>
                    <label htmlFor="contact" className="block mb-2 text-sm font-mono text-gray-900  font-bold ">Your Contact No.</label>
                    <input type="text" name="contactNo" value={userData.contactNo} onChange={onHandleChange} className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg w-[98%] lg:w-[90%] p-2.5 " placeholder="+91 412411" required />
                  </div>

                  <button type="submit" onSubmit={handleSubmit} className="w-[98%] lg:w-[90%] text-white bg-blue hover:bg-orange-900 text-sm px-5 py-3 rounded-lg text-center dark:bg-primary-600 dark:hover:bg-primary-700 ">Create an account</button>
                  <p className="text-sm font-light ">
                    Already have an account? <Link to="/signin" className="font-medium text-primary-600 hover:underline dark:text-primary-500 hover:text-red-500 underline text-orange-500">Login here</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Signup