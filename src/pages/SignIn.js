// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles.css";

// function SignIn() {
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Future: Sync with backend auth system
//     navigate("/home");
//   };

//   return (
//     <div className="signin-container">
//       <h2>Sign In</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="text"
//           placeholder="Enter your name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Enter password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit" className="btn-primary">Sign In</button>
//       </form>
//     </div>
//   );
// }

// export default SignIn;
