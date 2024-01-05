import React from 'react';
import WeekDays from './WeekDays';
import CalendarGrid from './CalendarGrid';

const MonthView = () => {
  return (
    <div>
      <table className="w-full">
        <WeekDays />
        <CalendarGrid />
      </table>
    </div>
  );
};

export default MonthView;
