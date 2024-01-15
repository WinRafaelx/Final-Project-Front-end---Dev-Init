import { createSlice } from "@reduxjs/toolkit";
import data from "../data/planner.json";
import { months } from "../models/model";

const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    data: data,
  },
  reducers: {
    addEvent: (state, action) => {
      const { year, month, date, task } = action.payload;

      // Find the target month
      const targetMonth = state.data.find(
        (item) => item.year === year && item.month === month
      );

      // Check if the target month exists
      if (targetMonth) {
        // Find the target date within the month
        const targetDate = targetMonth.plan.find(
          (item) => item.date === date
        );

        // Check if the target date exists
        if (targetDate) {
          // Update events for the target date
          targetDate.events.push(task);
        } else {
          // If the target date doesn't exist, create a new entry
          const newEvent = {
            date: date,
            events: [task],
          };
          targetMonth.plan.push(newEvent); // Use push instead of splice
        }
      } else {
        // If the target month doesn't exist, create a new entry for the month
        state.data.push({
          year: year,
          month: month,
          plan: [
            {
              date: date,
              events: [task],
            },
          ],
        });
      }
    },
    removeEvent: (state, action) => {
      const { date, index } = action.payload;
      try {
        const targetMonth = state.data.find(
          (item) =>
            item.year === date.getFullYear() &&
            item.month === months[date.getMonth()]
        );

        if (targetMonth) {
          const targetDate = targetMonth.plan.find(
            (item) => item.date === date.getDate()
          );

          if (targetDate) {
            targetDate.events.splice(index, 1);
          } else {
            console.error("Target date not found");
          }
        } else {
          console.error("Target month not found");
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
});

export const { addEvent, removeEvent } = calendarSlice.actions;

export default calendarSlice.reducer;

export const getPlanner = (state) => state.calendar.data;
