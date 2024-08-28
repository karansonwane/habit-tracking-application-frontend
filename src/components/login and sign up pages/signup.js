import React from 'react'
import './signup.css'
export default function signup() {
  return (
  <>
  <div className='signupmaindiv'>
  <div className="container ">
  <div className="row justify-content-center ">
    <div className="col-md-6 registration-container signupdiv2">
      <h2 className="text-center mb-4">Registration</h2>
      <form >
        <div className="form-group">
          <input  type="text" className="form-control" placeholder="Enter your name"/>
        </div>
        <div className="form-group">
          <input type="email"  className="form-control"  placeholder="Enter your email"/>
        </div>
        <div className="form-group">
          <input type="email"  className="form-control"  placeholder="Enter fathers email"/>
        </div>
        <div className="form-group">
          <input type="password" className="form-control"  placeholder="Password"/>
        </div>
        <div className="form-group">
          <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password"/>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" id="confirmPassword" placeholder="Confirm Password"/>
        </div>
        <button type="submit" className="btn btn-primary btn-block">Register</button>
      </form>
      <div className="text-center mt-3">
        <p>Already have an account? <a href="Login">Login here</a></p>
      </div>
    </div>
  </div>
</div>
  </div>
  </>
  )
}
