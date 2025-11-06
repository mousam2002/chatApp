import React, { useState, useEffect } from 'react';
import Cookies from "js-cookie";
import axios from "axios";

function useGetAllUsers() {

  const [ allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);

      try {
        const token = Cookies.get("jwt");
        const response = await axios.get("/api/user/getUserProfile", {
          withCredentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
  
          }
        }
      );

      // console.log("API Response:", response.data);

      setAllUsers(response.data.filteredUsers);
      setLoading(false)
      
      } catch (error) {
        console.log("Error is useGetAllUsers" + error);
      }
    }
    getUsers();  
  }, [])
  
  return [allUsers, loading]
}

export default useGetAllUsers;