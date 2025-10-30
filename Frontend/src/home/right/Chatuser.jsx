import React from 'react'

function Chatuser() {
  return (
   <>
   <div className=' p-5 h-[12vh] flex justify-start items-center space-x-4 bg-gray-900 hover:bg-gray-300 duration-300'>
      <div>
         <div className="avatar avatar-online">
           <div className="w-14 rounded-full">
             <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
           </div>
         </div>
      </div>
        
      <div>
         <h1 className=' text-xl'>Mousam Tamrakar</h1>
         <span className=' text-sm'>Online</span>
      </div>
      
   </div>
   </>
  )
}

export default Chatuser