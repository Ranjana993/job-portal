import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

const Signin = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
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
    const response = await axios.post("https://solesphere-backend12.onrender.com/signin", userData)
    console.log(response?.data)
    const token = response.data.token;
    localStorage.setItem('user-Token', token);
    navigate("/")
  }
  return (
    <>
      <div className="py-12">
        <section className="">
          <div className="flex items-center py-4">
            <div className="w-full flex justify-between gap-4 rounded-lg">
              <div className="p-4 w-full lg:w-[50%] ml-2 lg:ml-12 px-4 lg:px-12 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-5xl font-bold leading-tight tracking-tight font-mono">Sign in </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-mono text-gray-900  font-bold ">Your Email</label>
                    <input type="email" name="email" value={userData.email} onChange={onHandleChange} className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg w-[98%] lg:w-[90%] p-3 " placeholder="email@gmail.com" required />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-mono font-bold text-gray-900 ">Password</label>
                    <input type="password" name="password" value={userData.password} onChange={onHandleChange} placeholder="••••••••" className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg w-[98%] lg:w-[90%] p-3 " required />
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input aria-describedby="terms" type="checkbox" className="w-[98%] lg:w-[90%] h-5 border border-gray-300 rounded " required />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="terms" className="font-light text-gray-500">I accept the <Link className="font-medium text-primary-600 hover:underline  dark:text-primary-500" to="#">Terms and Conditions</Link></label>
                    </div>
                  </div>
                  <button type="submit" onSubmit={handleSubmit} className="w-[98%] lg:w-[90%] text-white bg-blue hover:bg-violet-900 text-sm px-5 py-3 rounded-lg text-center dark:bg-primary-600 dark:hover:bg-primary-700 ">Create an account</button>
                  <p className="text-sm font-light ">
                    Don`&apos;t have account? <Link to="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500 hover:text-orange-500">SignUp here</Link>
                  </p>
                </form>
              </div>
              <div className="w-[50%] px-12 hidden lg:block">
                <img className="w-full rounded-xl bg-contain" src={"https://media.istockphoto.com/id/899652622/photo/successful-young-woman-in-modern-office-working-on-laptop.jpg?s=612x612&w=0&k=20&c=9sj8y429T09bGj5JSREExFyTaJXccRAXskAE-4__Abs="} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Signin