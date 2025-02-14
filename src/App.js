// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//  import Welcome from "./pages/Welcome";
//  import SignIn from "./pages/SignIn";
//  import Home from "./pages/Home";
// import "./styles.css";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Welcome />} />
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/home" element={<Home />} />
//       </Routes>
//     </Router>
//   );
// }

/**
 * The App function renders a welcome message and an image from the public folder in a React component
 * for the Axis Task Manager application.
 * @returns The `App` component is being returned, which contains a logo, a heading "Welcome to Axis
 * Task Manager", and a paragraph describing the purpose of the app.
 */
export default App;
import React from "react";
import "./styles.css";

function App() {
  return (
    <div className="app-container">
      {/* Correct way to use an image from the public folder */}
      <div className="logo-container">
        <img src="/AxisLogoUpdated.png" alt="Axis Task Manager Logo" className="logo" />
      </div>

      <h1>Welcome to Axis Task Manager</h1>
      <p>Your personal assistant for managing tasks and staying organized.</p>
    </div>
  );
}

export default App;
