import { createBrowserRouter } from "react-router";
import MainlayOut from "../layout/MainlayOut";
import HomePage from "../page/HomePage";
import AboutUs from "../page/AboutUs";
import Signin from "../page/Signin";
import Signup from "../page/Signup";
import ForgetPass from "../page/ForgetPass";
import Category from "../page/Category";
import Details from "../page/Details";
import Profile from "../page/Profile";
import Navbar from "../componnt/Navbar";
import PrivateRoute from "../privateRouter/PrivateRoute";



export const router = createBrowserRouter([
    {
        path:'/',
        Component: MainlayOut,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path: "/about",
                Component: AboutUs
            },
            {
                path: "/navbar",
                Component: Navbar
            },
            {
                path: "/signin",
                Component: Signin
            },
            {
                path: "/signup",
                Component: Signup
            },
            {
                path: "/forgetpassword",
                Component: ForgetPass
            },
            {
                path: "/category",
                Component: Category
            },
            {
                path: "/details",
                Component: Details
            },
            {
                path: "/proflie",
                element: (<PrivateRoute>
                    <Profile></Profile>
                </PrivateRoute>)
            },
             {
        path: "/category/:skillId",
       
        element: (
          <PrivateRoute>
            
            <Details></Details>
          </PrivateRoute>
        ),
        
      },
            
        ],
    },
]) 