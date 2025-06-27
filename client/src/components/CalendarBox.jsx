import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "./CalendarGlass.css"; // Add glass style

const CalendarBox = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="glass calendar-container">
      <h3> Calendar</h3>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default CalendarBox;
