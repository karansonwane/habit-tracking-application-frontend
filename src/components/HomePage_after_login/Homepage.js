import React from 'react'
import '../HomePage_after_login/Homepage.css'
import Calendar from 'react-calendar';
export default function Homepage() {
  return (
    <>
    <div className='homepagemaindiv'>

      {/* navbar start */}
    <div >
      
    <nav className="navbar1 navbar bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand logo pirata-one-regular">Habit Tracker</a>
            <form className="d-flex new-amsterdam-regular" role="search">
              <a className="nav-link active navbarlinks  new-amsterdam-regular " aria-current="page" href="#">Home</a>
              <a className="nav-link active navbarlinks new-amsterdam-regular " aria-current="page" href="#">About Us</a>
              <a className="nav-link active navbarlinks new-amsterdam-regular " aria-current="page" href="Login">Login</a>
              <a className="nav-link active navbarlinks new-amsterdam-regular " aria-current="page" href="Signup">Sign Up</a>
            </form>
          </div>
        </nav>
    </div>
      {/* navbar start */}
<div>
      
</div>


    </div>
    </>
  )
}
