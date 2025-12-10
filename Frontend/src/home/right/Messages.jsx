import React, { useRef, useEffect } from 'react'
import Message from './Message'
import useGetMessage from '../../context/useGetMessage.js'
import Loading from '../../components/Loading.jsx';
import useGetSocketMessage from '../../context/useGetSocketMessage.jsx';

function Messages() {
  const {messages, loading} = useGetMessage();
  useGetSocketMessage();
  console.log(messages);

  const lastMessageRef = useRef()
  useEffect(() => {
    setTimeout(() => {
      if (lastMessageRef.current) {
        lastMessageRef.current.scrollIntoView({behavior: "smooth"});
      }
    },100)
  }, [messages]);
  
  return (
   <>
    {
      loading ? (
        <Loading />
      ) : (
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message  message={message} />
          </div>
        ))
      )
    }
    <div className=' p-4' style={{minHeight: "calc(88vh - 10vh)"}}>
      { !loading && messages.length === 0 && (
        <div>
          <p className=' text-center font-bold mt-[20%]'>Say! Hi</p>
        </div>
      )}
    </div>
   </>
  )
}

export default Messages