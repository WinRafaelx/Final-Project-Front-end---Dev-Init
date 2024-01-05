import React from 'react';
import MonthView from './MonthView';

const Calendar = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="wrapper bg-white rounded shadow w-full">
        <div className="flex items-center justify-between p-4 border-b">
          <button className="px-2 py-1 border rounded hover:bg-gray-200">Prev</button>
          <h2 className="text-xl font-semibold">January 2024</h2>
          <button className="px-2 py-1 border rounded hover:bg-gray-200">Next</button>
        </div>
        <MonthView />
      </div>
    </div>
  );
};

export default Calendar;
