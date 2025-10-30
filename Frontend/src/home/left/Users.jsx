import React from 'react'
import User from './User'

function Users() {
  return (
  <div style={{maxHeight: "calc(83vh - 1vh)"}} className=' flex-scroll overflow-y-auto '>
    <User />
    <User />
    <User />
    <User />
    <User />
    <User />
    <User />
    <User />
    <User />
  </div>
  )
}

export default Users