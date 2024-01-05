import React from 'react';

const WeekDays = () => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <thead>
      <tr>
        {daysOfWeek.map((day, index) => (
          <th key={index} className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
            <span className="xl:block lg:block md:block sm:block hidden">{day}</span>
            <span className="xl:hidden lg:hidden md:hidden sm:hidden block">{day}</span>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default WeekDays;
