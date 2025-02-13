// Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import TaskBoard from "./TaskBoard";
import Calendar from "./Calendar";
import Profile from "./Profile";
import AxisLogo from "../assets/AxisLogo.png";
import "../styles.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <img src={axisLogo} alt="Axis Logo" className="logo" />
      <h1>Welcome to Axis</h1>
      <Profile />
      <div className="home-sections">
        <TaskBoard />
        <Calendar />
      </div>
    </div>
  );
}

export default Home;
