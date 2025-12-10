import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import useSendMessage from '../../context/useSendMessage.js';

function Type() {
  const { loading, sendMessages} = useSendMessage();
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message.trim()) {
      return;
    }
    await sendMessages(message);
    setMessage("");
  }
  return (
  <>
    <form action="" onSubmit={ handleSubmit }>
      <div className=' flex justify-center items-center space-x-3 bg-slate-600 h-[8vh]'>
        <div className=' w-[70%] mx-4'>
          <input 
            type="text" 
            value={message}
            onChange={(e) => {
              setMessage(e.target.value)
            } }
            placeholder="Type here" 
            className="input py-3 px-3 border border-none rounded-xl w-full grow outline-none bg-state-900" 
          />
        </div>
        <button type='submit' disabled={loading} className=' text-3xl'>
          <IoSend />
        </button>
      </div>
    </form> 
  </>
  )
}

export default Type