import React from 'react'
import Left from './home/left/Left'
import Right from './home/right/Right'
import Logout from './home/logout/logout'
import Signup from './components/Signup'
import Login from './components/Login'
import { useAuth } from './context/AuthProvider'
import { Routes, Route, Navigate } from 'react-router-dom';


function App() {
  const [authuser, setAuthUser] = useAuth();
  console.log(authuser);
  
  return (
    <>

    <Routes>
      <Route path="/" element={
        authuser ? (<div className=' flex h-screen'>
        <Logout />
        <Left />
        <Right />
        </div>
        ) : (
          <Navigate to={"/login"} />
        )
      } />

      <Route path='/login' element={authuser ? <Navigate to={"/"} /> : <Login />}/>
      <Route path='/signup' element={authuser ? <Navigate to={"/"} /> : <Signup />}/>

    </Routes>
    </>
  )
}

export default App