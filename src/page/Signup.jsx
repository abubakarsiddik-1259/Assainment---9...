import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const GoogleProvider = new GoogleAuthProvider();

const Signup = () => {
  const [show, setShow] = useState(false);

  //////// Submit Fun //////
  const hendleSignup = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("DOm", { email, password });

    ///// Password Condition ///////
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character."
      );
      return;
    }

    ///////////////Sigin ///////////

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        toast.success("Signup success");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  const handleGoogleSignin = () => {
    signInWithPopup(auth, GoogleProvider)
      .then((res) => {
        console.log(res);
        toast.success("Signup success");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  return (
    <div className="bg-gradient-to-r from-blue-400 to-green-600">
      <div className="hero  min-h-screen">
        <div className="card bg-gray-500 w-full max-w-sm shrink-0   shadow-2xl">
          <div className="card-body">
            <form onSubmit={hendleSignup}>
              <fieldset className="fieldset">
                <label className="label text-[12px] text-gray-200">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                  required
                />

                <div className="relative">
                  <label className="label text-[12px] text-gray-200">
                    Password
                  </label>
                  <input
                    name="password"
                    type={show ? "text" : "password"}
                    className="input"
                    placeholder="Password"
                    required
                  />
                  <span
                    onClick={() => setShow(!show)}
                    className="absolute  right-[30px] top-[32px] text-[15px] cursor-pointer"
                  >
                    {show ? <FaEye></FaEye> : <IoEyeOff></IoEyeOff>}
                  </span>
                </div>

                <div>
                  <a className="link link-hover text-[12px] text-gray-200">
                    Forgot password?
                  </a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>

                {/* ... divaider..  */}
                <div className="flex items-center justify-center gap-2 my-2">
                  <div className="h-px w-16 bg-white/30"></div>
                  <span className="text-sm text-white/70">or</span>
                  <div className="h-px w-16 bg-white/30"></div>
                </div>

                {/* .... Google..  */}
                <button
                  onClick={handleGoogleSignin}
                  type="button"
                  className="flex cursor-pointer items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt=""
                    className="w-5 h-5"
                  />
                  Continue with Google
                </button>
                <p className="text-center text-sm text-white/80 mt-3">
                  Alredy have an account?
                  <Link
                    to="/signin"
                    className="text-pink-600 underline font-semibold pl-2"
                  >
                    Signin
                  </Link>
                </p>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
