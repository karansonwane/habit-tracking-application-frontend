import React, { useState } from "react";
import "../HomePage_after_login/Homepage.css";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const [date, setDate] = useState("");
  const [showHabitOptions, setShowHabitOptions] = useState(false);
  const [habitType, setHabitType] = useState("");
  const [showCategories, setShowCategories] = useState(false);
  const [categories, setCategories] = useState([]);
  const [habits, setHabits] = useState([]);
  const [selectedHabit, setSelectedHabit] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleAddHabit = () => {
    setShowHabitOptions(true);
    setHabitType("");
    setShowCategories(false);
    setCategories([]);
    setHabits([]);
    setSelectedHabit(null);
  };

  const handleHabitTypeChange = async (type) => {
    setHabitType(type);
    setShowHabitOptions(false);

    try {
      const response = await fetch(`http://localhost:8080/users/habit?type=${type}`);
      if (!response.ok) throw new Error("Failed to fetch categories");
      const data = await response.json();
      setCategories(data);
      setShowCategories(true);
    } catch (error) {
      console.error("Error fetching categories:", error.message);
    }
  };

  const handleCategorySelect = async (category) => {
    try {
      const response = await fetch(`http://localhost:8080/users/habit/getbycategory?category=${category}`);
      if (!response.ok) throw new Error("Failed to fetch habits");
      const data = await response.json();
      setHabits(data);
    } catch (error) {
      console.error("Error fetching habits:", error.message);
    }
  };

  const handleHabitSelect = async (habitId) => {
    try {
      const response = await fetch(`http://localhost:8080/users/habit/habitname?habitname=${habitId}`);
      if (!response.ok) throw new Error("Failed to fetch habit details");
      const data = await response.json();
      setSelectedHabit(data);
    } catch (error) {
      console.error("Error fetching habit details:", error.message);
    }
  };

  return (
    <>
      <div className="homepagemaindiv">
        {/* Navbar */}
        <nav className="navbar1 navbar bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand logo pirata-one-regular">Habit Tracker</a>
            <form className="d-flex new-amsterdam-regular" role="search">
              <a className="nav-link active navbarlinks new-amsterdam-regular" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link active navbarlinks new-amsterdam-regular" aria-current="page" href="#">
                About Us
              </a>
              <a className="nav-link active navbarlinks new-amsterdam-regular" aria-current="page" href="Login" onClick={handleLogout}>
                Logout
              </a>
            </form>
          </div>
        </nav>

        {/* Welcome Message */}
        <div className="weelcomemessagedive">
          <div className="container welcomeheadlineinhomepage">
            <h4>Welcome to <b>Habit Tracker</b>!</h4>
            <p>
              We're thrilled to have you here on your journey to building better habits.
              Every small step you take today can lead to big changes tomorrow.
            </p>
            <button className="addhabitbutton" onClick={handleAddHabit}>Add Habit</button>
          </div>
          <img src="/watchimg.jpeg" className="wacthimg" alt="Loading..." />
        </div>

        {/* Calendar */}
        <div className="calendermaindiv">
          <div className="calenderdiv">
            <h3>Select a Date:</h3>
            <Calendar onChange={setDate} value={new Date()} />
            <p>Selected Date: {date ? new Date(date).toDateString() : "None"}</p>
          </div>

          <div>
            {/* Habit Options */}
            {showHabitOptions && (
              <div className="addhabitbuttondiv">
                <button className="addhabitbutton" onClick={() => handleHabitTypeChange("good")}>Good Habits</button>
                <button className="addhabitbutton" onClick={() => handleHabitTypeChange("bad")}>Bad Habits</button>
              </div>
            )}

            {/* Categories */}
            {showCategories && (
              <div>
                <h4>Select a Category:</h4>
                {categories.map((category) => (
                  <button
                    key={category}
                    className="categoryButton"
                    onClick={() => handleCategorySelect(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}

            {/* Habits */}
            {habits.length > 0 && (
              <div>
                <h4>Select a Habit:</h4>
                {habits.map((habit) => (
                  <button
                    key={habit.id}
                    className="habitButton"
                    onClick={() => handleHabitSelect(habit.id)}
                  >
                    {habit.name}
                  </button>
                ))}
              </div>
            )}

            {/* Habit Details */}
            {selectedHabit && (
              <div>
                <h4>Habit Details:</h4>
                <p><strong>Name:</strong> {selectedHabit.name}</p>
                <p><strong>Description:</strong> {selectedHabit.description}</p>
                <p><strong>Plan:</strong> {selectedHabit.plan}</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="footer">
          <h6>About the App: Habit Tracker helps you build positive habits and track your progress daily.</h6>
          <h6>Contact: karansonwane050@gmail.com</h6>
        </footer>
      </div>
    </>
  );
}
