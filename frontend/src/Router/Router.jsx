import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import PostJob from "../Pages/PostJob";
import Signup from "../Components/Signup";
import Signin from "../Components/Signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/post-job", element: <PostJob /> },
      { path: "/signup", element: <Signup /> },
      { path: "/signin", element: <Signin /> },
    ]
  } 
])

export default router