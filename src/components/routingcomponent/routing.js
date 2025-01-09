import React from 'react'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import Home from '../homepage_befour_login/home'
import Login from '../login and sign up pages/Login'
import Signup from '../login and sign up pages/Signup'
import Homepage from '../HomePage_after_login/Homepage'
export default function routing() {
  return (
  <>
  
  <BrowserRouter>
   <Routes>

    <Route path="dashboard" element={<Homepage />} />
      <Route path='/' element={<Home/>}></Route>
      {/* <Route path='/' element={<Login/>}></Route> */}
      <Route path='Login' element={<Login/>}></Route>
      <Route path='Signup' element={<Signup/>}></Route>
   </Routes>
   </BrowserRouter>
  </>
  )
}
