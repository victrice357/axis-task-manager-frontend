import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";
import AxisLogo from "../assets/AxisLogo.png"; // ✅ Using your logo

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <img src={AxisLogo} alt="Axis Logo" className="logo" />
      <h1>Welcome to Axis Task Manager</h1>
      <p>Your personal assistant for managing tasks and staying organized.</p>
      <button className="btn-primary" onClick={() => navigate("/signin")}>
        Get Started
      </button>
    </div>
  );
}

export default Welcome;
