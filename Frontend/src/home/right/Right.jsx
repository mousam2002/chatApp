import React, { useEffect } from 'react'
import Chatuser from './Chatuser'
import Messages from './Messages'
import Type from './Type'
import useConversation from '../../statemanage/useConversation.js'
import { useAuth } from '../../context/AuthProvider.jsx'

function Right() {
  const { selectedConversation, setSelectedConversation} = useConversation();
  useEffect(() => {
    return () => setSelectedConversation(null);
  },[])

  return (
    <div className='w-[70%] h-screen bg-slate-800 text-white flex flex-col'>
      <div>
        {!selectedConversation 
        ? (<Nochat />)
        : (
          <>
            <div className='shrink-0'>
              <Chatuser />
            </div>
            <div className='py-2 flex-1 overflow-y-auto' style={{ minHeight: "calc(88vh - 8vh)"}}>
              <Messages />
            </div>
            <div className=' shrink-0'>
              <Type />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Right


const Nochat = () => {
  const [authUser] = useAuth()
  return (
    <>
    <div className=' flex h-screen items-center justify-center'>
      <h1 className=' text-center font-semibold text-xl'>Welcome <span>{authUser?.user?.name}</span>
        <br />
        Select a chat to start messaging</h1>
      {/* { authUser.name && <Nochat />} */}
    </div>
    </>
  )
}