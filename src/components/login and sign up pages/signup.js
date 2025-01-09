import React, { useState } from 'react'
import './signup.css'
import Login from '../login and sign up pages/Login'
import { useNavigate } from 'react-router-dom';
export default function Signup() {

  const [formData , setFormData]=useState({
    name:'',
    email:'',
    number:'',
    password:'',
    confirmpassword:'',
    role:'USER'
  });
  const[loading ,setLoading]=useState(false);
  const[alreadyexists,setAlreadyExists]=useState('');
  const [errormessage, setErrormessage]=useState('');
  const [successmessage,setSuccessmessage]=useState('');
let navigate=useNavigate();

const handlechange =(e)=>{
setFormData({
  ...formData,
  [e.target.name]:e.target.value
});
};



const handleregistration= async(e)=>{
  e.preventDefault();
  setLoading(true);
  if(formData.password!==formData.confirmpassword){
    setLoading(false);
    setErrormessage('plese reenter same password')
    return;
  }

  try{
    const responce= await fetch('http://localhost:8080/register',{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData)
    });

    const result=  responce.json();
   

     if(responce.ok){
      setSuccessmessage('registration successfull......! now you can LOGIN');
      navigate('/');
    }
    else{
     (result.error && result .error.includes('Email already exists')) 
        
        setErrormessage( 'Registration failed! Email already exists.');
      }
    }
  catch(error){

setErrormessage("error")

  }finally{
    setLoading(false);
  }
}
return (
  <>
  <div className='signupmaindiv'>
  <div className="container ">
  <div className="row justify-content-center ">
    <div className="col-md-6 registration-container signupdiv2">
      <h2 className="text-center mb-4">Registration</h2>
      {errormessage && <p className="text-danger text-center">{errormessage}</p>}
      {successmessage && <p className="text-success text-center">{successmessage}</p>}
      {alreadyexists && <p className="text-danger text-center">{alreadyexists}</p>}
             
      <form onSubmit={handleregistration} >
        <div className="form-group">
          <input  type="text" className="form-control" placeholder="Enter your name"
          name='name' value={formData.name} onChange={handlechange}/>
        </div>
        
        <div className="form-group">
          <input type="email"  className="form-control"  placeholder="Enter your email"
            name='email'  value={formData.email} onChange={handlechange}/>
        </div>
        <div className="form-group">
        <input type="number"  className="form-control" placeholder=" Enter your mobile number" 
        name="number"  value={formData.number} onChange={handlechange}/>
        </div>
        <div className="form-group">
          <input type="password" className="form-control"  placeholder="Password"
         name='password' value={formData.password} onChange={handlechange}/>
        </div>
        <div className="form-group">
          <input type="password" className="form-control" id="confirmpassword" placeholder="Confirm Password"
         name='confirmpassword'   value={formData.confirmpassword} onChange={handlechange}/>
        </div>
       
        <button type="submit" className="btn btn-primary btn-block"> {loading?<div class="d-flex align-items-center">
  <strong role="status">Loading...</strong>
  <div class="spinner-border ms-auto" aria-hidden="true"></div>
</div>
:'Register'}</button>
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
