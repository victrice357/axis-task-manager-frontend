// Profile.js
import React, { useState } from "react";
import "../styles.css";

function Profile() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    password: "********",
    photo: "https://via.placeholder.com/100",
  });

  return (
    <div className="profile-container">
      <img src={user.photo} alt="Profile" className="profile-pic" />
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <button className="btn-secondary">Change Password</button>
    </div>
  );
}

export default Profile;
