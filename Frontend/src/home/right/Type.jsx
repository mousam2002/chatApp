import React from 'react'
import { IoSend } from "react-icons/io5";

function Type() {
  return (
   <>
    <div className=' flex justify-center items-center space-x-3 bg-slate-600 h-[8vh]'>
      <div className=' w-[70%] mx-4'>
        <input 
        type="text" 
        placeholder="Type here" 
        className="input py-3 px-3 border border-none rounded-xl w-full grow outline-none bg-state-900" />
      </div>
      <button className=' text-3xl'>
        <IoSend />
      </button>
    </div>
   </>
  )
}

export default Type