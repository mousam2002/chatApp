import { useEffect, useState, createContext, useContext } from "react";
import io from "socket.io-client"
import { useAuth } from "./AuthProvider";

const SocketContext = createContext();

export const useSocketContext = () => {
   return useContext(SocketContext)
}

export const SocketProvider = ({children}) => {
   const [socket, setSocket] = useState(null)
   const [onlineUsers, setOnlineUsers] = useState([])
   const [authUser] = useAuth();

   useEffect(() => {
      if (authUser) {
         const socket = io("http://localhost:8080/", {
            query: {
               userId: authUser.user._id,
            },
         });
         setSocket(socket);

         socket.on("getonline", (users) => {
            setOnlineUsers(users)
         })
         return () => socket.close();
      } else {
         if (socket) {
            socket.close();
            setSocket(null);
         }
      }
   },[authUser])

   return (
      <SocketContext.Provider value={{socket, onlineUsers}}>
         {children}
      </SocketContext.Provider>
   )
}