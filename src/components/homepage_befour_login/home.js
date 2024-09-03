import React from 'react'
import './homepage.css'
import { Carousel } from 'react-bootstrap';
export default function home() {
  return (
    <>
      <div className='maindiv '>
        
        {/* heder start*/}
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
        {/* heder end */}
        
        {/* body start */}

        <div className=' maindivforheadlineimage'>

          <img className=' headingimag' src='/1725220532157.jpg' />
         <div className='headingimagheadlinediv'>
         <h3 className='headingimagheadline'>"Achieve More with Consistency: Track Your Habits Daily"</h3>
         
<p className='headingimagheadlineparagraph'>"Our habit-tracking application empowers users to build and maintain positive habits by providing customizable tracking, insightful progress visuals, and motivational reminders. With features like goal setting, data backup, and community support, it simplifies habit management and helps users achieve their personal and professional goals effectively."</p>        
         </div>
        </div>
        <div>
          <div className="container-fluid bodyDiv" >
          <div className='container-fluid'>
          <Carousel >
            <Carousel.Item >
                <img 
                    className="d-block w-100 image"
                    src="https://media.istockphoto.com/id/1345765648/photo/close-up-shot-of-the-dart-arrow-hit-on-bulleyes-of-dartboard-to-represent-that-the-business.jpg?s=612x612&w=0&k=20&c=xgzgT8Cz63DwpUHNL2_QGMhig0_M3f0Fpg9_B9fGMMY="
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Daily Goals</h3>
                    <p>"Stay on track with your daily goals and celebrate your progress!"</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 image"
                    src="https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Healthy Habits</h3>
                    <p>"Embrace healthy habits and enhance your well-being every day!"</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 image"
                    src="https://media.istockphoto.com/id/1467893793/photo/embroidered-red-pins-on-a-calendar-event-planner-calendar-clock-to-set-timetable-organize.jpg?b=1&s=612x612&w=0&k=20&c=I2RZj0a6zGhNFGojaz4f_FP2aA6PSaN308G40_2QOqI="
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>"Maximize Your Productivity: Organize, Plan, and Achieve!"</h3>
                    <p>"Boost your productivity with effective time management and organized planning!"</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 image"
                    src="https://media.istockphoto.com/id/1298113649/photo/mature-man-at-home-stock-photo.jpg?s=612x612&w=0&k=20&c=bQvsBnZiA_RiP6QvXXLpDbvc0N7631HU7-2-QF2KEtA="
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>"Embrace Learning and Self-Improvement"</h3>
                    <p>"Inspire yourself with daily learning and personal development activities!"</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 image"
                    src="https://media.istockphoto.com/id/1420645937/photo/woman-traveler-in-front-of-nature-background-tea-plantations-landscape-in-sri-lanka.jpg?s=612x612&w=0&k=20&c=gWcaQUGjIBgUOkczeYBNlZulVEeU7amVsIUmheu1jac="
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3> "Find Your Calm: Embrace Relaxation and Mindfulness"</h3>
                    <p>"Discover tranquility with peaceful scenes and mindful practices."</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>


            {/* <img className='image' src='https://st4.depositphotos.com/36569202/39731/i/380/depositphotos_397313402-stock-photo-concept-word-habits-wooden-cubes.jpg'></img> */}
          </div>
          <div className='container-fluid divslide1'>
           <h6 className='habbitsentanceheading'>"Transform Your Habits, Transform Your Life"</h6>
           <p className='habbitsentanceparagrapg'>Every great achievement starts with a single step. Join our community today and take control of your daily habits to create a life filled with purpose, productivity, and success. The journey to a better you begins here—let’s make it happen together.</p>
          <h6>"Transform your daily routines into powerful habits—every step you take brings you closer to your goals."</h6>
           </div>
          
        </div >
       
        <div className='divforcarosal '>
        <div className='container-fluid divslide1'>
        <h6> <i className="fa-2x fa-solid fa-calendar-check calendericon"></i>     Habit Tracking - Easily track your daily habits</h6>
        <h6> <i className="fa-solid fa-2x fa-bars-progress calendericon"></i>     Progress Monitoring - Monitor your progress with detailed reports</h6>
        <h6> <i className="fa-2x fa-regular fa-handshake calendericon"></i>    Habit Tracking - Easily track your daily habits</h6>
        <h6><i class="fa-solid fa-bullseye fa-2x"></i>     Set your sights on success and achieve your goals with determination</h6>
        <h6><i class="fa-regular fa-bell fa-2x"></i> Stay updated with the latest notifications and never miss an important alert</h6>
        </div>

        <div>
     <img className='secoundimg' src='https://media.istockphoto.com/id/1201439750/photo/hand-turns-dice-and-changes-the-expression-old-habits-to-new-habits.jpg?s=612x612&w=0&k=20&c=vTZeFBRydrBOU3-H9Bza2DtPO1zPkvQosAhzzMRPiDw='></img>
        </div>
        </div>

        </div>


        <div className="loginandsignupbuttondiv container-fluid">
        <a class=" loginandsignupbutton btn " href="Login" role="button">Login</a>
        <a class="loginandsignupbutton btn " href="signup" role="button">Sign Up</a>
        </div>

        {/* body end */}


        {/* footer start */}
        <nav classNameName="footer footer2 navbar1 bg-body-tertiary">
          <div className="footer footer2 container-fluid">

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
