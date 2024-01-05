import React, { useEffect, useState } from "react";
import DayCell from "./DayCell";

const CalendarGrid = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
  ];

  const [calendarData, setCalendarData] = useState([]);

  useEffect(() => {
    const nowMonth = new Date().getMonth() + 1;
    const firstDay = new Date(new Date().getFullYear(), nowMonth, 1).getDay();
    const daysLastMonth = new Date(
      new Date().getFullYear(),
      nowMonth,
      0
    ).getDate();
    const daysInMonth = new Date(
      new Date().getFullYear(),
      nowMonth + 1,
      0
    ).getDate();

    const generateCalendarData = () => {
      let keepWeek = [];
      let countWeek = 0;

      // Days from the previous month
      for (let i = 0; i < firstDay; i++) {
        keepWeek.push({
          day: daysLastMonth - firstDay + i + 1,
          events: [], // You can add events here if needed
          thismonth: false,
        });
        countWeek += 1;
      }

      // Days from the current month
      for (let i = 0; i < daysInMonth; i++) {
        keepWeek.push({
          day: i + 1,
          events: [], // You can add events here if needed
          thismonth: true,
        });
        countWeek += 1;
        if (countWeek === 7) {
          calendarData.push(keepWeek);
          keepWeek = [];
          countWeek = 0;
        }
      }

      // Days from the next month to fill the last row
      for (let i = 0; i < 7 - (daysInMonth + firstDay) % 7; i++) {
        keepWeek.push({
          day: i + 1,
          events: [], // You can add events here if needed
          thismonth: false,
        });
        countWeek += 1;
      }

      setCalendarData([...calendarData, keepWeek]);
    };

    if (calendarData.length === 0) {
      generateCalendarData();
    }
  }, [calendarData]);

  return (
    <tbody>
      {calendarData.map((week, weekIndex) => (
        <tr key={weekIndex}>
          {week.map((day, dayIndex) => (
            <DayCell key={dayIndex} day={day.day} thismonth={day.thismonth} />
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default CalendarGrid;
