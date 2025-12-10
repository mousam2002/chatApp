import React from 'react'
import useConversation from '../../statemanage/useConversation.js'
import { useSocketContext } from '../../context/SocketContext.jsx';

function Chatuser() {
   const {selectedConversation} = useConversation()
   //   console.log(selectedConversation);
   

   const { onlineUsers } = useSocketContext();

   const getOnlineUserStatus = (userId) => {
      return onlineUsers.includes(userId)?"Online":"Offline"
   }
  
   if (!selectedConversation) {
      return null;
   }

  
  return (
   <>
   <div className=' p-5 h-[12vh] flex justify-start items-center space-x-4 bg-gray-900 hover:bg-gray-300 duration-300'>
      <div>
         {/* <div className={ `avatar ${isOnline ? "avatar-online" : ""}` }> */}
         <div className={`avatar online`}>
            <div className="w-14 rounded-full">
               <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
            </div>
         </div>
      </div>
        
      <div>
         <h1 className=' text-xl'>{ selectedConversation?.name}</h1>
         <span className=' text-sm'>{getOnlineUserStatus(selectedConversation._id)}</span>
      </div>
      
   </div>
   </>
  )
}

export default Chatuser