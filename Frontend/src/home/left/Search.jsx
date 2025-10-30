import React from 'react'
import { IoSearch } from "react-icons/io5";

function Search() {
  return (
   <>
   <div className=' h-[10vh]'>
      <div className=' px-6 py-4 '>
         <form action="">
            <div className=' flex justify-center items-center space-x-3'>
               <label className="input w-[80%] border border-gray-700 rounded-lg">
                  <input type="search" className=' grow outline-none bg-state-900' required placeholder="Search" />
               </label>
               <button>
                  <IoSearch className=' text-5xl p-2 hover:bg-gray-600 rounded-full duration-300' />
               </button>
            </div>
         </form>
      </div>
   </div>
   </>
  )
}

export default Search