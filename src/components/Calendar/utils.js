import { useState } from 'react';

const countOfWeekInCalendar = 6;
const countOfDayInWeek = 7;
const currentDayOfCurrentMonth = 1;
const startingDayOfNextMonth = 1;
const defaultDate = new Date();
const [currentDate, setCurrentDate] = useState(defaultDate);
const daysInWeek = [1, 2, 3, 4, 5, 6, 0];
/**
 * Get count of days in the current month
 * @param {Date} date - current date
 * @returns {number} - count of days in the current month
*/
const getCountOfDaysInCurrentMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

/**
 * Get index of first day in the current month
 * @param {Date} date - current date
 * @returns {number} - index of first day
*/
const getIndexOfFirstDayInMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay()

/**
 * Get starting day of the month
 * @param {Array} days - number of days in a week in order
 * @param {number} index - index of first day of the current month
 * @returns
*/
const getStartingDayOfMonth = (days, index) => days.indexOf(index) + 1;

/**
 * Get last date in the previous month
 * @param {Date} date - current date
 * @returns {number} - last date in the previous month
*/
const getLastDateOfPrevMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 0);

/**
 * Get starting date of the previous month
 * @param {number} lastDay -last date in the previous month
 * @param {Array} days - number of days in a week in order
 * @param {number} index - index of first day of the current month
 * @returns {number} - starting date of the previous month
*/
const getStartingDateOfPrevMonth = (lastDay, days, index) => lastDay.getDate() - days.indexOf(index) + 1;

/**
 * Get count of days in the previous month for render
 * @param {number} startingDate - starting date of the current month
 * @returns {number} - count of days in the previous month
*/
const getCountOfDaysInPrevMonth = (startingDate) => startingDate - 1;

/**
 * Get count of days in the next month for render
 * @param {number} countOfWeek - count of weeks in the calendar for render
 * @param {number} countOfDay - count of days in the calendar for render
 * @param {number} countOfDaysInPrevMonth - count of days of the previous month in the calendar
 * @param {number} countOfDaysInMonth - count of days of the next month in the calendar
 * @returns {number} - count of days in the next month
*/
const getCountOfDayInNextMonth = (countOfWeek, countOfDay, countOfDaysInPrevMonth, countOfDaysInMonth) => (
  countOfWeek * countOfDay - (countOfDaysInPrevMonth + countOfDaysInMonth)
);

/**
 * Get days of month for the calendar
 * @param {Date} date - current date
 * @param {number} countOfDays - count of days for render
 * @param {number} dateOfMonth - starting date of the month for render
 * @param {string} variant - name that indicates whether the month is current
 * @param {function} setValue - function sets a value for calendar days
 * @returns {array} - array of days for calendar
*/
const getDaysOfMonthForCalendar = (date, countOfDays, dateOfMonth, variant, setDateValue) => {
  const calendar = [];
  let days = dateOfMonth;
  // eslint-disable-next-line
  for(let i = 1; i <= countOfDays; i++) {
    calendar.push({
      day: days,
      variant,
      dateValue: setDateValue(date, days)
    });
    days += 1;
  }
  return calendar;
}

/**
 * Set value of the date of the previous month
 * @param {Date} date - current date
 * @param {Date} day - current day of previous month
 * @returns {string} - value of the date of the previous month
*/
const setDateValueOfPrevMonth = (date, day) => (
  `${date.getMonth() === 0 ? date.getFullYear() - 1 : date.getFullYear()}-${date.getMonth() === 0 ? 12 : date.getMonth()}-${day}`
);

/**
 * Set value of the date of the current month
 * @param {Date} date - current date
 * @param {Date} day - current day of current month
 * @returns {string} - value of the date of the current month
*/
const setDateValueOfCurrentMonth = (date, day) => (
  `${date.getFullYear()}-${date.getMonth() + 1}-${day}`
);

/**
 * Set value of the date of the next month
 * @param {Date} date - current date
 * @param {Date} day - current day of next month
 * @returns {string} - value of the date of the next month
*/
const setDateValueOfNextMonth = (date, day) => (
  `${date.getMonth() === 11 ? date.getFullYear() + 1 : date.getFullYear()}-${date.getMonth() === 11 ? 1 : date.getMonth() + 2}-${day}`
);

/**
 * Concatenation days of month of calendar
 * @param {Array} daysOfPrevMonth - days of the previous month
 * @param {Array} daysOfCurrentMonth - days of the current month
 * @param {Array} daysOfNextMonth - days of the next month
 * @returns {Array} - days of calendar for rendering
*/
const concatDaysOfMonth = (daysOfPrevMonth, daysOfCurrentMonth, daysOfNextMonth) => {
  const calendar = []
  return calendar.concat(daysOfPrevMonth, daysOfCurrentMonth, daysOfNextMonth)
}

/**
 * Get previous month
 * @param {Date} date - current date
 * @returns {number} - previous month
*/
const getPrevMonth = (date) => {
  setCurrentDate(new Date(date.getFullYear(), date.getMonth() - 1, 1))
}

/**
 * Get next month
 * @param {Date} date - current date
 * @returns {number} - next month
*/
const getNextMonth = (date) => {
  setCurrentDate(new Date(date.getFullYear(), date.getMonth() + 1, 1))
}

const countOfDaysInCurrentMonth = getCountOfDaysInCurrentMonth(currentDate);
const indexOfFirstDayInMonth = getIndexOfFirstDayInMonth(currentDate);
const startingDayOfCurrentMonth = getStartingDayOfMonth(daysInWeek, indexOfFirstDayInMonth);
const lastDateOfPrevMonth = getLastDateOfPrevMonth(currentDate);
const startingDayOfPrevMonth = getStartingDateOfPrevMonth(
  lastDateOfPrevMonth,
  daysInWeek,
  indexOfFirstDayInMonth
);
const countOfDaysInPrevMonth = getCountOfDaysInPrevMonth(startingDayOfCurrentMonth);
const countOfDayInNextMonth = getCountOfDayInNextMonth(
  countOfWeekInCalendar,
  countOfDayInWeek,
  countOfDaysInPrevMonth,
  countOfDaysInCurrentMonth
);
const getDaysOfPrevMonth = getDaysOfMonthForCalendar(
  currentDate,
  countOfDaysInPrevMonth,
  startingDayOfPrevMonth,
  'otherMonth',
  setDateValueOfPrevMonth
);
const getDaysOfCurrentMonth = getDaysOfMonthForCalendar(
  currentDate,
  countOfDaysInCurrentMonth,
  currentDayOfCurrentMonth,
  'currentMonth',
  setDateValueOfCurrentMonth
);
const getDaysOfNextMonth = getDaysOfMonthForCalendar(
  currentDate,
  countOfDayInNextMonth,
  startingDayOfNextMonth,
  'otherMonth',
  setDateValueOfNextMonth
);

const calendarDays = concatDaysOfMonth(getDaysOfPrevMonth, getDaysOfCurrentMonth, getDaysOfNextMonth);

export { getPrevMonth, getNextMonth, calendarDays };
