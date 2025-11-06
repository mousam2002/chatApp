import React, { useState } from 'react'
import { TbLogout2 } from "react-icons/tb";
import axios from 'axios';
import Cookies from "js-cookie";

function Logout() {
   const [loading, setLoading] = useState(false)
   const handleLogout = async () => {

      setLoading(true);
      try {
         const res =  await axios.post("/api/user/logout");
         localStorage.removeItem("messenger");
         Cookies.remove("jwt");
         setLoading(false);
         alert("Logout Successfully");
      } catch (error) {
         console.log(error);
      }
   }
  return (
   <>
   <div className=' w-[5%] bg-slate-950 text-white flex flex-col justify-end'>
      <div className=' px-6 py-4 '>
         <form action="">
            <div className=' flex justify-center items-center space-x-3'>
               <button>
                  <TbLogout2 
                     className=' text-5xl p-2 hover:bg-gray-600 rounded-lg duration-300' 
                     onClick={handleLogout}
                  />
               </button>
            </div>
         </form>
      </div>
   </div>
   </>
  )
}

export default Logout