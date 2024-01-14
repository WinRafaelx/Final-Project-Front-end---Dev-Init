let nowMonth = new Date().getMonth() + 1;
let thisYear = new Date().getFullYear();
let firstDay = new Date(new Date().getFullYear(), nowMonth, 1).getDay();
let daysLastMonth = new Date(new Date().getFullYear(), nowMonth, 0).getDate();
let daysInMonth = new Date(
  new Date().getFullYear(),
  nowMonth + 1,
  0
).getDate();

const formatWithLeadingZero = (value) => (value < 10 ? `0${value}` : value);


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

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const today = new Date();
const todayDiaryFormatted = `${today.getFullYear()}-${formatWithLeadingZero(today.getMonth() + 1)}-${formatWithLeadingZero(today.getDate())}`;

const todayFormatted = `${days[today.getDay()]} ${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`;

export { nowMonth, firstDay, daysLastMonth, daysInMonth, thisYear, months, todayFormatted, todayDiaryFormatted, today };
