import React, { useState } from 'react'
import User from './User'
import useGetAllUsers from '../../context/useGetAllusers';


function Users() {
  const [allUsers, loading] = useGetAllUsers();

  console.log(allUsers);
  
  return (
  <div style={{maxHeight: "calc(83vh - 1vh)"}} className=' flex-scroll overflow-y-auto '>
    {
      allUsers.map((user, index) => {
        return <User key={index} user={user} />
      })
    }
  </div>
  )
}

export default Users