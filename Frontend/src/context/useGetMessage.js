import React, { useEffect, useState } from 'react'
import useConversation from '../statemanage/useConversation.js';
import axios from "axios";

function useGetMessage() {
   const [loading, setLoading] = useState(false);
   const { messages, setMessages, selectedConversation} = useConversation();

   useEffect(() => {
      const getMessages = async () => {
         setLoading(true);
         if (selectedConversation && selectedConversation._id) {
            try {
               const response = await axios.get(
                  `/api/message/ge/${selectedConversation._id}`
               );
   
               setMessages(response.data);
               setLoading(false);
            
            } catch (error) {
               console.log("Error in useGetMessage: ", error);
            }
         }
      };
      getMessages();
   },[selectedConversation, setMessages])

  return {
   messages,
   loading
  };
}

export default useGetMessage