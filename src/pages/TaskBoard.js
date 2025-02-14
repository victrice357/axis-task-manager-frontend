// // TaskBoard.js
// import React, { useState } from "react";
// import "../styles.css";

// function TaskBoard() {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState("");

//   const addTask = () => {
//     if (newTask.trim()) {
//       setTasks([...tasks, { text: newTask, status: "task" }]);
//       setNewTask("");
//     }
//   };

//   const moveTask = (index, newStatus) => {
//     const updatedTasks = [...tasks];
//     updatedTasks[index].status = newStatus;
//     setTasks(updatedTasks);
//   };

//   return (
//     <div className="taskboard-container">
//       <h2>Task Board</h2>
//       <div className="task-input">
//         <input
//           type="text"
//           placeholder="New task..."
//           value={newTask}
//           onChange={(e) => setNewTask(e.target.value)}
//         />
//         <button onClick={addTask} className="btn-primary">Add Task</button>
//       </div>
//       <div className="task-columns">
//         <div className="task-column">
//           <h3>To Do</h3>
//           {tasks
//             .filter((task) => task.status === "task")
//             .map((task, index) => (
//               <div key={index} className="task-card">
//                 {task.text}
//                 <button onClick={() => moveTask(index, "in-progress")} className="btn-secondary">Start</button>
//               </div>
//             ))}
//         </div>
//         <div className="task-column">
//           <h3>In Progress</h3>
//           {tasks
//             .filter((task) => task.status === "in-progress")
//             .map((task, index) => (
//               <div key={index} className="task-card">
//                 {task.text}
//                 <button onClick={() => moveTask(index, "completed")} className="btn-success">Complete</button>
//               </div>
//             ))}
//         </div>
//         <div className="task-column">
//           <h3>Completed ✅</h3>
//           {tasks
//             .filter((task) => task.status === "completed")
//             .map((task, index) => (
//               <div key={index} className="task-card completed">
//                 {task.text} 🎉 Well done!
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TaskBoard;
