import React from 'react'

function Message({message}) {
   const authUser = JSON.parse(localStorage.getItem("messenger"));
   const itsme = message.senderId === authUser.user._id;
   const chatName = itsme?"chat-end":"chat-start";
   const chatColor = itsme?"bg-blue-400":"";
   const createdAt = new Date(message.createdAt);
   const formattedTime = createdAt.toLocaleDateString([],{
      hour:'2-digit',
      minute: '2-digit'
   })
   
  return (
   <>
   <div className=' p-4'>
      <div className= {`chat ${chatName} `}>
         <span className={`chat-bubble text-white ${chatColor}`}>
            {message.message}
         </span>
         <p className=' text-xs text-gray-200 mt-1 self-end'>{formattedTime}</p>
      </div>
   </div>
   </>
  )
}

export default Message