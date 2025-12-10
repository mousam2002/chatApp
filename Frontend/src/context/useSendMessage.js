import React, { useState } from 'react'
import useConversation from "../statemanage/useConversation.js"
import axios from 'axios';

function useSendMessage() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation} = useConversation();
  
  const sendMessages = async (message) => {

    if (!selectedConversation?._id) {
      console.log("No conversation selected");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        `/api/message/send/${selectedConversation._id}`,
        { message }
      );
      // setMessages([...messages, response.data]);
      setMessages((prev) => [...prev, response.data.newMessage]);
      setLoading(false);
       
    } catch (error) {
      console.log("Error in Send Messages: ", error);
      setLoading(false)
    }
  };
  return { loading, sendMessages}
}

export default useSendMessage