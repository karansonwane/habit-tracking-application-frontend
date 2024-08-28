import React from 'react'
import './homepage.css'
export default function home() {
  return (
    <>
      <div className='maindiv container-fluid'>

        {/* heder start*/}
        <nav className="navbar1 navbar bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand">Habit Tracker</a>
            <form className="d-flex" role="search">
              <a className="nav-link active navbarlinks" aria-current="page" href="#">Home</a>
              <a className="nav-link active navbarlinks" aria-current="page" href="#">About Us</a>
              <a className="nav-link active navbarlinks" aria-current="page" href="Login">Login</a>
              <a className="nav-link active navbarlinks" aria-current="page" href="Signup">Sign Up</a>
            </form>
          </div>
        </nav>
        {/* heder end */}
        
        {/* body start */}
        <div>
          <div className="container-fluid bodyDiv" >
          <div className='container-fluid'>
            <img className='image' src='https://st4.depositphotos.com/36569202/39731/i/380/depositphotos_397313402-stock-photo-concept-word-habits-wooden-cubes.jpg'></img>
          </div >
          <div className='container-fluid'>
           <h6 className='habbitsentanceheading'>"Transform Your Habits, Transform Your Life"</h6>
           <p className='habbitsentanceparagrapg'>Every great achievement starts with a single step. Join our community today and take control of your daily habits to create a life filled with purpose, productivity, and success. The journey to a better you begins here—let’s make it happen together.</p>
          </div>
          
        </div >
       
        <div className='divforcarosal'>
        <div className='container-fluid '>
        <h6> <i className="fa-2x fa-solid fa-calendar-check calendericon"></i>     Habit Tracking - Easily track your daily habits</h6>
        <h6> <i className="fa-solid fa-2x fa-bars-progress calendericon"></i>     Progress Monitoring - Monitor your progress with detailed reports</h6>
        <h6> <i className="fa-2x fa-regular fa-handshake calendericon"></i>     Habit Tracking - Easily track your daily habits</h6>
        </div>

        <div>
     <img className='secoundimg' src='https://media.istockphoto.com/id/1201439750/photo/hand-turns-dice-and-changes-the-expression-old-habits-to-new-habits.jpg?s=612x612&w=0&k=20&c=vTZeFBRydrBOU3-H9Bza2DtPO1zPkvQosAhzzMRPiDw='></img>
        </div>
        </div>

        </div>


        <div className="loginandsignupbutton container-fluid">
        <a class=" loginsignupbutton btn btn-primary" href="Login" role="button">Login</a>
        <a class="loginsignupbutton btn btn-primary" href="signup" role="button">Sign Up</a>
        </div>

        {/* body end */}


        {/* footer start */}
        <nav classNameName="footer navbar bg-body-tertiary">
          <div className="footer container-fluid">

            <form className="d-flex" role="search">
              <h6 className=' footerlink'>About Us</h6>
              <h6 className=' footerlink'>Contact</h6>
              <h6 className=' footerlink'>Privacy Policy</h6>
              <h6 className=' footerlink'>Terms of Service</h6>
              <h6 className=' footerlink'>Contact Info</h6>
            </form>
          </div>
        </nav>
        {/* footer end */}

      </div>
    </>
  )
}
