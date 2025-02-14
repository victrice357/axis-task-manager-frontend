// // Calendar.js
// import React, { useState } from "react";
// import "../styles.css";

// function Calendar() {
//   const [events, setEvents] = useState([]);
//   const [newEvent, setNewEvent] = useState({ date: "", title: "" });

//   const addEvent = () => {
//     if (newEvent.date && newEvent.title) {
//       setEvents([...events, newEvent]);
//       setNewEvent({ date: "", title: "" });
//     }
//   };

//   return (
//     <div className="calendar-container">
//       <h2>Calendar</h2>
//       <div className="event-input">
//         <input
//           type="date"
//           value={newEvent.date}
//           onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Event title..."
//           value={newEvent.title}
//           onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
//         />
//         <button onClick={addEvent} className="btn-primary">Add Event</button>
//       </div>
//       <ul className="event-list">
//       {events.map((event) => (
//   <li key={event.id}>
//     <strong>{event.date}</strong> - {event.title}
//   </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Calendar;
