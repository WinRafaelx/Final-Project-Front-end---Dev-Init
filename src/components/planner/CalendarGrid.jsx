import React, { useEffect, useState } from "react";
import DayCell from "./DayCell";
import data from "../../data/planner.json";
import { months } from "./utils";

const CalendarGrid = ({ year, month }) => {
  const [calendarData, setCalendarData] = useState([]);

  useEffect(() => {
    const firstDay = new Date(year, month - 1, 1).getDay();
    const daysLastMonth = new Date(year, month - 1, 0).getDate();
    const daysInMonth = new Date(year, month, 0).getDate();

    let events = [{ day: 1, events: []}, { day: 2, events: []}];

    // Ensure the selected month has data
    const monthData = data.find(
      (item) => item.month === months[month - 1] && item.year === year
    );
    if (!monthData) {
      // If no data is available for the month, set an empty array
      setCalendarData([]);
    } else {
      events = monthData.plan;
    }

    let countDate = 0;
    console.log(events);

    const generateCalendarData = () => {
      let newCalendarData = [];
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
        let eventsInDay = [];
        if (countDate < events.length && i + 1 === events[countDate].day) {
          eventsInDay = events[countDate].events;
          countDate += 1;
        }
        keepWeek.push({
          day: i + 1,
          events: eventsInDay, 
          thismonth: true,
        });
        countWeek += 1;
        if (countWeek === 7) {
          newCalendarData.push(keepWeek);
          keepWeek = [];
          countWeek = 0;
        }
      }

      // Days from the next month to fill the last row
      for (let i = 0; i < 7 - ((daysInMonth + firstDay) % 7); i++) {
        keepWeek.push({
          day: i + 1,
          events: [], 
          thismonth: false,
        });
        countWeek += 1;
      }

      newCalendarData = [...newCalendarData, keepWeek];
      setCalendarData(newCalendarData);
    };

    generateCalendarData();
  }, [year, month, data, months]);

  return (
    <tbody>
      {calendarData.map((week, weekIndex) => (
        <tr key={weekIndex}>
          {week.map((day, dayIndex) => (
            <DayCell
              key={dayIndex}
              day={day.day}
              thismonth={day.thismonth}
              events={day.events}
            />
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default CalendarGrid;
