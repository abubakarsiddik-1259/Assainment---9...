import React, { useContext } from "react";
import MyLink from "./MyLink";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { Link } from "react-router";
import logo from "../assets/logo/logooo.png";

const Navbar = () => {
  const { user, setUser, signOutFuntion } = useContext(AuthContext);

  const links = (
    <>
      <li className="text-white">
        <MyLink  to="/">Home</MyLink>
      </li>
    
      <li className="text-white">
        <MyLink to="/proflie">Profile</MyLink>
      </li>
    </>
  );

  ////////////// signout ////////
  const handleSignOut = () => {
    signOutFuntion()
      .then((res) => {
        console.log(res);
        toast.success("Signup success");
        setUser(null);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  return (
    <div>
      <div className="navbar bg-[#827397] shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <img src={logo} className="h-13 ml-8" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* .................  */}
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center ">
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0} className=" m-1">
                    {" "}
                    <img
                      referrerPolicy="no-referrer"
                      src={user?.photoURL}
                      className="h-10 w-10  rounded-full mx-auto"
                      alt=""
                    />
                  </div>
                  <ul
                    tabIndex="-1"
                    className="dropdown-content menu bg-base-100 rounded-box z-66  p-2 shadow-sm"
                  >
                    <li>
                      {" "}
                      <h2 className="py-3 font-semibold">
                        {user?.displayName}
                      </h2>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="">
                {" "}
                <button
                  className="btn btn-primary mt-2 "
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            <div className="">
              <button>
                <Link
                  to="/signin"
                  className="btn btn-primary mr-5 border-0 bg-gradient-to-r from-[#4B70F5] to-[#4B70F5]"
                >
                  Signin
                </Link>
              </button>

              <button>
                <Link
                  to="/signup"
                  className="btn bg-gradient-to-r from-[#4B70F5] to-[#4B70F5] border-0 btn-primary"
                >
                  Signup
                </Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
