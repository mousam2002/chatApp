import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";

export const sendMessage = async (req, res) => {
   // console.log("message send to mausam", req.params.id, req.body.message);

   try {
      const {message} = req.body;
      const { id:receiverId } = req.params;
      const senderId = req.user._id; //current logged in user

      let conversation = await Conversation.findOne({
         participants: {$all: [ senderId, receiverId ]}
      })
      if (!conversation) {
         conversation = await Conversation.create({
            participants: [senderId, receiverId],
         })

         const newMessage = new Message({
            senderId,
            receiverId,
            message,
         })

         if (newMessage) {
            conversation.messages.push(newMessage._id);
         }
         await Promise.all([conversation.save(), newMessage.save()]);
         res.status(201).json({ message: "message sent successfully", newMessage});
      }
   } catch (error) {
      console.log("Error is Sending message" + error);
      res.status(500).json({message: "Internal server error"});
   }
};

export const getMessage = async (req, res) => {
   try {
      const { id:chatuser } = req.params;
      const senderId = req.user._id; //current logged in user
      
      let conversation = await Conversation.findOne({
         participants: {$all: [ senderId, chatuser ]}
      }).populate("messages");   

      if (!conversation) {
         return res.status(201).json({message: "No conversation found"})
      }

      const message = conversation.messages;
      res.status(201).json({message});
   } catch (error) {
      console.log("message gettint error"+error);
      
   }
}