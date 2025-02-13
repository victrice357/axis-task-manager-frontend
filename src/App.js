import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { fetchMessage } from "./axis";  // ✅ Make sure this import is correct!

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchMessage().then(data => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Axis Task Manager</h1>
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
