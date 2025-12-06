import React from 'react'
import Message from './Message'
import useGetMessage from '../../context/useGetMessage.js'

function Messages() {
  const {messages, loading} = useGetMessage();
  console.log(messages);
  
  return (
   <>
    <div className=' p-4' style={{minHeight: "clac(88vh - 10vh)"}}>
      <Message />
    </div>
   </>
  )
}

export default Messages