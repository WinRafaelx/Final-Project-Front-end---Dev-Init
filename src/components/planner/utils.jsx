let nowMonth = new Date().getMonth() + 1;
let thisYear = new Date().getFullYear();
let firstDay = new Date(new Date().getFullYear(), nowMonth, 1).getDay();
let daysLastMonth = new Date(new Date().getFullYear(), nowMonth, 0).getDate();
let daysInMonth = new Date(
  new Date().getFullYear(),
  nowMonth + 1,
  0
).getDate();

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
    "October",
    "November",
    "December",
  ];

export { nowMonth, firstDay, daysLastMonth, daysInMonth, thisYear, months };
