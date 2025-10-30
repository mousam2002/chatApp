import React from 'react'
import { TbLogout2 } from "react-icons/tb";

function Logout() {
  return (
   <>
   <div className=' w-[5%] bg-slate-950 text-white flex flex-col justify-end'>
      <div className=' px-6 py-4 '>
         <form action="">
            <div className=' flex justify-center items-center space-x-3'>
               <button>
                  <TbLogout2 className=' text-5xl p-2 hover:bg-gray-600 rounded-lg duration-300' />
               </button>
            </div>
         </form>
      </div>
   </div>
   </>
  )
}

export default Logout