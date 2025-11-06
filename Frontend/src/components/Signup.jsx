import React from 'react'
import { useForm } from "react-hook-form"
import axios from "axios";
import { useAuth } from '../context/AuthProvider';
import { Link } from 'react-router-dom';

function Signup() {
  const [ authuser, setAuthUser ] = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");
  const validatePasswordMatch = (value) => {
    return value === password || "Password and Confirm Password don't match";
  }

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.username,
      email: data.email,
      password: data.password,
      confirmpassword: data.confirmpassword
    };
    await axios.post("/api/user/signup", userInfo)
    .then((response) => {
      console.log(response.data);
      if (response.data) {
        alert("Signup successfull! You can now log in.")
      }

      localStorage.setItem("messenger", JSON.stringify(response.data));
      setAuthUser(response.data);
    })
    .catch((error) => {
      if (error.response) {
        alert("Error:"+error.response.data.message)
      }
    });
    
  }

  return (
   <>
   <div className=' flex h-screen items-center justify-center'>
      <form
        onSubmit={handleSubmit(onSubmit)} 
        className=' border border-white px-6 py-3 rounded-md space-y-3 w-96'
      >
        <h1 className=' text-2xl items-center text-blue-600 font-bold'>Messenger</h1>
        <h1 className=' text-2xl items-center'>Create a New <span className=' text-blue-600 font-semibold'>Account</span></h1>
        {/* <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"> */}
          <div className=" flex flex-col space-y-3">
            {/* <fieldset className="fieldset"> */}
              <label className="input validator w-full">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </g>
                </svg>
                <input
                  type="text"
                  placeholder="Username"
                  {...register("username", { required: true })}
                />
              </label>  
              {errors.username && <span className=' text-red-600 text-sm font-semibold'>This field is required</span>}
                 
              {/* Email */}
              <label className="input validator w-full">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input 
                  type="email" 
                  placeholder="Email" 
                  {...register("email", { required: true })}
                />
              </label>  
              {errors.email && <span className=' text-red-600 text-sm font-semibold'>This field is required</span>}
              
              {/* password */}
              <label className="input validator w-full">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                    ></path>
                    <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                  </g>
                </svg>
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password", { required: true, validate: validatePasswordMatch })}
                />
              </label>
              {errors.password && <span className=' text-red-600 text-sm font-semibold'>This field is required</span>}
              
              {/* confirm password */}
              <label className="input validator w-full">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                    ></path>
                    <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                  </g>
                </svg>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  {...register("confirmpassword", { required: true, validate: validatePasswordMatch })}
                />
              </label>  
              {errors.confirmpassword && <span className=' text-red-600 text-sm font-semibold'>{ errors.confirmpassword.message }</span>}
              
              
              <div className=' flex justify-center items-center'>
                <button className=" text-white bg-blue-600 cursor-pointer w-full rounded-lg py-2">Signup</button>
              </div>
              <p>Have any Account?{" "} 
                <Link to={"/login"} className=' text-blue-500 underline cursor-pointer'>
                  Login
                </Link>
              </p>
            {/* </fieldset> */}
          </div>
        {/* </div> */}
      </form>
   </div>
   </>
  )
}

export default Signup