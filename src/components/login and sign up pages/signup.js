import React, { useState } from 'react'
import './signup.css'
import { useNavigate } from 'react-router-dom';
export default function Signup() {
let [user_name ,setUsername] = useState('');
let [email,setUseremail]=useState('');
let [father_email,setFatheremail]=useState('');
let [password ,setPassword] = useState('');
let [confirmpassword ,setConfirmpassword] = useState('');
let [mobile_num,setnumber]=useState('');

let navigate=useNavigate();
const updateData=(e)=>{
  e.preventDefault(); 
  if(password!=confirmpassword){
    alert("Password and Confirm Password should be same");
    console.log("Password and Confirm Password should be same")
    return;
  }
  const signupdata={user_name,email,father_email,password,confirmpassword,mobile_num}
  fetch("http://localhost:8080/habbit/rgister",{
    method:"POST",
    headers:{
      "Accept":"application/json",
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(signupdata)
  }).then((res)=>{
    alert("user registerd successfully");
    navigate("/Login")
  }).catch((err)=>{
    console.log(err.message)
  })
}
  return (
  <>
  <div className='signupmaindiv'>
  <div className="container ">
  <div className="row justify-content-center ">
    <div className="col-md-6 registration-container signupdiv2">
      <h2 className="text-center mb-4">Registration</h2>
      <form onSubmit={updateData} >
        <div className="form-group">
          <input  type="text" className="form-control" placeholder="Enter your name" 
          onChange={(e)=>{setUsername (e.target.value)}}/>
        </div>
        <div className="form-group">
          <input type="email"  className="form-control"  placeholder="Enter your email"
          onChange={(e)=>{setUseremail(e.target.value)}}/>
        </div>
        <div className="form-group">
          <input type="email"  className="form-control"  placeholder="Enter fathers email"
          onChange={(e)=>{setFatheremail(e.target.value)}}
          />
        </div>
        <div className="form-group">
          <input type="password" className="form-control"  placeholder="Password"
          onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <div className="form-group">
          <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password"
          onChange={(e)=>{setConfirmpassword(e.target.value)}}/>
        </div>
        <div className="form-group">
          <input type="number" className="form-control" id="confirmPassword" placeholder="enter your number"
          onChange={(e)=>{setnumber(e.target.value)}}
          />
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
