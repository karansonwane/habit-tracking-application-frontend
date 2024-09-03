import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const[username,setUsername]=useState('');
  const[password, setPassword]=useState('');
  const navigate=useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();
    fetch('')
    // .then((data)=>{data.find})
  }



  return (
   < >

   <div className="login-container loginmaindiv">
   <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 login-container logindiv2">
          <h2 className="text-center mb-4">Login</h2>
          <form >
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" placeholder="Enter email/Number"
               onChange={(e)=>setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" placeholder="  Password"
              onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Login</button>
          </form>
          <div className="text-center mt-3">
            <p>Don't have an account? <a href='Signup'>Register here</a></p>
          </div>
        </div>
      </div>
    </div>
   </div>
   </>
  )
}
