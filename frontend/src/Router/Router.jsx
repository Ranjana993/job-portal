import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import PostJob from "../Pages/PostJob";
import Signup from "../Components/Signup";
import Signin from "../Components/Signin";
import JobPost from "../Pages/JobPost";
import Register from "../Components/jobPoster/Register";
import Login from "../Components/jobPoster/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/post-job", element: <JobPost /> },
      { path: "/signup", element: <Register /> },
      { path: "/signin", element: <Login /> },
    ]
  } 
])

export default router