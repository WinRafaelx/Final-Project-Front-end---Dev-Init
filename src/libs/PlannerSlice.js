import { createSlice } from "@reduxjs/toolkit";
import data from "../data/planner.json";

const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    data: data,
  },
  reducers: {
    addEvent: (state, action) => {
      const { year, month, date, task } = action.payload;
      console.log(year, month, date, task);

      // Find the target month
      const targetMonth = state.data.find(
        (item) => item.year === year && item.month === month
      );

      console.log(targetMonth);

      // Check if the target month exists
      if (targetMonth) {
        // Find the target date within the month
        const targetDate = targetMonth['plan'].find(
          (item) => item.date === date
        );

        // Check if the target date exists
        if (targetDate) {
          // Update tasks for the target date
          targetDate['events'].push(task);
        } else {
          // If the target date doesn't exist, create a new entry
          const indexDate = targetMonth['plan'].findIndex(
            (item) => item.date > date
          );
          const newEvent = {
            date: date,
            events: [task],
          };
          targetMonth['plan'].splice(indexDate, 0, newEvent);
          // targetDate.splice(indexDate, 0, newEvent);
        }
      } else {
        // If the target month doesn't exist, create a new entry for the month
        state.data.push({
          year: year,
          month: month,
          dates: [
            {
              date: date,
              tasks: [task],
            },
          ],
        });
      }
    },
  },
});

export const { addEvent } = calendarSlice.actions;

export default calendarSlice.reducer;

export const getPlanner = (state) => state.calendar.data;
