import React from 'react'
import Chatuser from './Chatuser'
import Messages from './Messages'
import Type from './Type'

function Right() {
  return (
   <>
    <div className='w-[70%] h-screen bg-slate-800 text-white flex flex-col'>
      <Chatuser />
      <div className='py-2 flex- overflow-y-auto' style={{ minHeight: "calc(88vh - 8vh)"}}>
        <Messages />
      </div>
      <Type />
    </div>
   </>
   
  )
}

export default Right