import React from 'react'
import './Login.css'

export default function login() {
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
              <input type="text" className="form-control" placeholder="Enter email/number"
              />
             
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" placeholder="  Password"
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
