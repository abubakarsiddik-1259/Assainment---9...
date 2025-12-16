import React, { useContext, useEffect, useState,  } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router";

const ForgetPass = () => {
const { setLoading,forgetPassFunction} = useContext(AuthContext)

const navigate = useNavigate();
 const location = useLocation();
  const [email, setEmail] = useState("");

useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);


  //////////////forget pass //////

  const handleForgetPassword = () => {
    
    
    forgetPassFunction(email)
      .then((res) => {
        console.log(res);
        setLoading(false);
        toast.success("Chek email reset password");
        navigate('/signin')

      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  return (
    <div className="bg-gradient-to-tr from-sky-500 to-emerald-500 pb-33 pt-33 ">
      <div className="card bg-gradient-to-b from-pink-500 to-blue-500 w-full max-w-sm shrink-0 shadow-2xl mx-auto ">
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label text-xl text-gray-200">Email</label>
            <input
            name="wemail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
           
              className="input"
              placeholder="Email"
            />
          

            <button
              onClick={handleForgetPassword}
              className="btn btn-neutral mt-4"
            >
              Forget password
            </button>
           
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;
