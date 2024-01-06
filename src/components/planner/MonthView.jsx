import React from 'react';
import WeekDays from './WeekDays';
import CalendarGrid from './CalendarGrid';

const MonthView = ({year, month}) => {
  return (
    <div>
      <table className="w-full">
        <WeekDays />
        <CalendarGrid year={year} month={month} />
      </table>
    </div>
  );
};

export default MonthView;
