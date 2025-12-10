import React from 'react'
import { useSocketContext } from './SocketContext';
import useConversation from '../statemanage/useConversation';
import { useEffect } from 'react';
import sound from "../assets/notificationSound.mp3"

function useGetSocketMessage() {
   const { socket} = useSocketContext();
   const { messages, setMessages } = useConversation();

   useEffect(() => {
      socket.on("newMessage", (newMessage) => {
         const notification = new Audio(sound)
         notification.play();

         setMessages((prev) => [...prev, newMessage])
      })
      return () => socket.off("newMessage")

   },[socket, messages, setMessages])
}


export default useGetSocketMessage