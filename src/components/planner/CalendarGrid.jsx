import React, { useEffect, useState } from "react";
import DayCell from "./DayCell";

const CalendarGrid = ({year, month}) => {

  const [calendarData, setCalendarData] = useState([]);

  useEffect(() => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysLastMonth = new Date(
      year,
      month,
      0
    ).getDate();
    const daysInMonth = new Date(
      year,
      month + 1,
      0
    ).getDate();
    console.log(year, month, daysInMonth, daysLastMonth, firstDay)

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
  }, [calendarData, year, month]);

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
