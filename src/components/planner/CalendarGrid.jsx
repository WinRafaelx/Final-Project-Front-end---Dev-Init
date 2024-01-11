import React, { useEffect, useState } from "react";
import DayCell from "./DayCell";
import { useSelector } from "react-redux";
import { getPlanner } from "../../libs/PlannerSlice";
import { months } from "../../models/model";

const CalendarGrid = ({ year, month }) => {
  const [calendarData, setCalendarData] = useState([]);
  const data = useSelector(getPlanner);

  useEffect(() => {
    const generateCalendarData = () => {
      const firstDay = new Date(year, month - 1, 1).getDay();
      const daysLastMonth = new Date(year, month - 1, 0).getDate();
      const daysInMonth = new Date(year, month, 0).getDate();

      let events = [{ date: 1, events: []}, { date: 2, events: []}];

      // Ensure the selected month has data
      const monthData = data.find(
        (item) => item.month === months[month - 1] && item.year === year
      );
      if (monthData) {
        events = monthData.plan;
      }

      let countDate = 0;
      let newCalendarData = [];
      let keepWeek = [];
      let countWeek = 0;

      // Days from the previous month
      for (let i = 0; i < firstDay; i++) {
        keepWeek.push({
          date: new Date(year, month-2, daysLastMonth - firstDay + i + 1),
          events: [], // You can add events here if needed
          thismonth: false,
        });
        countWeek += 1;
      }

      // Days from the current month
      for (let i = 0; i < daysInMonth; i++) {
        let eventsInDay = [];
        if (countDate < events.length && i + 1 === events[countDate].date) {
          eventsInDay = events[countDate].events;
          countDate += 1;
        }
        keepWeek.push({
          date: new Date(year, month - 1, i + 1),
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
          date: new Date(year, month, i + 1),
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
              day={day.date}
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
