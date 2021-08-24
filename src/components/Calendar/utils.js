const countOfWeekInCalendar = 6;
const countOfDayInWeek = 7;
const currentNumberOfDayInMonth = 1;
const startingDayOfNextMonth = 1;

/**
 * Get count of days in the current month
 * @param {Date} date - current date
 * @returns {number} - count of days in the current month
*/
const getCountOfDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

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
 * Get last date in the previos month
 * @param {Date} date - current date
 * @returns {number} - last date in the previos month
*/
const getLastDateInPrevMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 0);

/**
 * Get starting date of the previos month
 * @param {number} countOfDays -last date in the previos month
 * @param {Array} days - number of days in a week in order
 * @param {number} index - index of first day of the current month
 * @returns {number} - starting date of the previos month
*/
const getStartingDateOfPrevMonth = (countOfDays, days, index) => countOfDays.getDate() - days.indexOf(index) + 1;

/**
 * Get count of days in the previos month for render
 * @param {number} startingDate - starting date of the current month
 * @returns {number} - count of days in the previos month
*/
const getCountOfDaysInPrevMonth = (startingDate) => startingDate - 1;

/**
 * Get count of days in the next month for render
 * @param {number} countOfWeek - count of weeks in the calendar for render
 * @param {number} countOfDay - count of days in the calendar for render
 * @param {number} countOfDaysInPrevMonth - count of days of the previos month in the calendar
 * @param {number} countOfDaysInMonth - count of days of the next month in the calendar
 * @returns {number} - count of days in the next month
*/
const getCountOfDayInNextMonth = (countOfWeek, countOfDay, countOfDaysInPrevMonth, countOfDaysInMonth) => (
  countOfWeek * countOfDay - (countOfDaysInPrevMonth + countOfDaysInMonth)
);

/**
 * Get days of month for the calendar
 * @param {number} countOfDays - count of days for render
 * @param {number} dateOfMonth - starting date of the month for render
 * @param {string} variant - name that indicates whether the month is current
 * @param {function} setValue - function sets a value for calendar days
 * @returns {array} - array of days for calendar
*/
const getDaysOfMonthForCalendar = (countOfDays, dateOfMonth, variant, setDateValue) => {
  const calendar = [];
  let days = dateOfMonth;
  // eslint-disable-next-line
  for(let i = 1; i <= countOfDays; i++) {
    calendar.push({
      day: days,
      variant,
      dateValue: setDateValue(days)
    });
    days += 1;
  }
  return calendar;
}

/**
 * Set value of the date of the previos month
 * @param {Date} date - current date
 * @param {Date} day - current day of previos month
 * @returns {string} - index of first day
*/
const setDateValueOfPrevMonth = (date, day) => (
  `${date.getMonth() === 0 ? date.getFullYear() - 1 : date.getFullYear()}-${date.getMonth() === 0 ? 12 : date.getMonth()}-${day}`
);

/**
 * Set value of the date of the current month
 * @param {Date} date - current date
 * @param {Date} day - current day of current month
 * @returns {string} - index of first day
*/
const setDateValueOfCurrentMonth = (date, day) => (
  `${date.getFullYear()}-${date.getMonth() + 1}-${day}`
);

/**
 * Set value of the date of the next month
 * @param {Date} date - current date
 * @param {Date} day - current day of next month
 * @returns {string} - index of first day
*/
const setDateValueOfNextMonth = (date, day) => (
  `${date.getMonth() === 11 ? date.getFullYear() + 1 : date.getFullYear()}-${date.getMonth() === 11 ? 1 : date.getMonth() + 2}-${day}`
);

/**
 * Concatenation days of month of calendar
 * @param {Date} date - current date
 * @param {Date} day - current day of next month
 * @returns {string} - index of first day
*/

const concatDaysOfMonth = (daysOfPrevMonth, daysOfCurrentMonth, daysOfNextMonth) => {
  const calendar = []
  return calendar.concat(daysOfPrevMonth, daysOfCurrentMonth, daysOfNextMonth)
}
