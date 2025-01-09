import React, { useEffect, useState } from 'react';
import './Login.css';
import { Spinner } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const[loading , setLoading]=useState('');
  const navigate = useNavigate();

  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(token){
      navigate("/dashboard'")
    }
  },[navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    
    if (!email || !password) {
      setMessage('Please fill in both fields.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8080/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
                                
      if (response.ok) {
        const data = await response.json();

        if(data.status){
          setMessage(`Login successful! Welcome, ${data.message}`);
          localStorage.setItem('token', data.token);
          navigate("/dashboard")

        }else{
          setMessage(`login failed, ${data.message}`);

        }
        
      } else {
        const error = await response.json();
        // Check for account not enabled error
        if (error.message === 'Account is not verified. Please verify your email.') {
          setMessage('Your account is not verified. Please check your email.');
        } else {
          setMessage(error.message || 'Invalid email or password.');
        }
      }
    } catch (error) {
      setMessage('Error connecting to the server. Please try again later.');
    }
    finally{
      setLoading(false);
    }
  };

  return (
    <>
      <div className="login-container loginmaindiv">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 login-container logindiv2">
              <h2 className="text-center mb-4">Login</h2>
              {/* Display error or success messages */}
              {message && <p className="text-center alert alert-info">{message}</p>}
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="off"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="off"
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                {
                  loading?<div class="d-flex align-items-center">
                  <strong role="status">Loading...</strong>
                  <div class="spinner-border ms-auto" aria-hidden="true"></div>
                </div>:'Login'
                }
                </button>
              </form>
              <div className="text-center mt-3">
                <p>
                  Don't have an account? <Link to="/signup">Register here

                  </Link>

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
