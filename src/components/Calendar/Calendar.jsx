import React, { useEffect, useState } from 'react';
import NextArrow from '../Icons/NextArrow';
import PrevArrow from '../Icons/PrevArrow';
import {
  getCountOfDaysInCurrentMonth,
  getIndexOfFirstDayInMonth,
  getStartingDayOfMonth,
  getLastDateOfPrevMonth,
  getStartingDateOfPrevMonth,
  getCountOfDaysInPrevMonth,
  getCountOfDayInNextMonth,
  getDaysOfMonthForCalendar,
  setDateValueOfPrevMonth,
  setDateValueOfCurrentMonth,
  setDateValueOfNextMonth,
  concatDaysOfMonth,
  getIndexOfCurrentMonth,
  getIndexOfCurrentYear,
  getPrevMonth,
  getNextMonth,
  convertDate,
  getMonthIndex,
  getDateForSelectedMonth,
  getDateForSelectedYear,
  getIndexOfNextMonth,
  getIndexOfPrevMonth,
  getValueOfNextYear,
  getValueOfPrevYear,
  setYearValues,
} from './utils';
import {
  daysInWeek,
  dayNames,
  monthNames,
  countOfWeekInCalendar,
  countOfDayInWeek,
} from './constants';
import Select from '../Select';
import * as Styled from './styles';

const Calendar = () => {
  const defaultDate = new Date();
  const [currentDate, setCurrentDate] = useState(defaultDate);
  const [selectedDate, setSelectedDate] = useState([]);
  const currentDayOfCurrentMonth = 1;
  const startingDayOfNextMonth = 1;
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
  const daysOfPrevMonth = getDaysOfMonthForCalendar(
    currentDate,
    countOfDaysInPrevMonth,
    startingDayOfPrevMonth,
    'otherMonth',
    setDateValueOfPrevMonth
  );
  const daysOfCurrentMonth = getDaysOfMonthForCalendar(
    currentDate,
    countOfDaysInCurrentMonth,
    currentDayOfCurrentMonth,
    'currentMonth',
    setDateValueOfCurrentMonth
  );
  const daysOfNextMonth = getDaysOfMonthForCalendar(
    currentDate,
    countOfDayInNextMonth,
    startingDayOfNextMonth,
    'otherMonth',
    setDateValueOfNextMonth
  );
  const calendarDays = concatDaysOfMonth(daysOfPrevMonth, daysOfCurrentMonth, daysOfNextMonth);
  const currentMonth = getIndexOfCurrentMonth(currentDate);
  const currentYear = getIndexOfCurrentYear(currentDate);
  const valueForYearSelect = {
    startingYear: 2020,
    endingYear: defaultDate.getFullYear() + 10,
  };
  const years = setYearValues(valueForYearSelect.startingYear, valueForYearSelect.endingYear);
  const prevMonth = getPrevMonth(currentDate);
  const nextMonth = getNextMonth(currentDate);
  const [activeMonth, setActiveMonth] = useState(monthNames[currentMonth]);
  const [activeYear, setActiveYear] = useState(`${currentYear}`);
  const indexOfSelectingMonth = getMonthIndex(activeMonth, monthNames);
  const chooseOptionMonth = (option) => setActiveMonth(option);
  const chooseOptionYear = (option) => setActiveYear(option);
  const indexOfNextMonth = getIndexOfNextMonth(currentMonth);
  const indexOfPrevMonth = getIndexOfPrevMonth(currentMonth);
  const valueNextYear = getValueOfNextYear(currentMonth, currentYear);
  const valuePrevYear = getValueOfPrevYear(currentMonth, currentYear);
  const setPrevMonth = () => {
    setCurrentDate(prevMonth);
    setActiveMonth(monthNames[indexOfPrevMonth]);
    setActiveYear(valuePrevYear);
  };
  const setNextMonth = () => {
    setCurrentDate(nextMonth);
    setActiveMonth(monthNames[indexOfNextMonth]);
    setActiveYear(valueNextYear);
  };

  const isDisabledPrevYearButton = (month, year, startingYear) =>
    month === 0 && year <= startingYear;
  const isDisabledNextYearButton = (month, year, endingYear) => month === 11 && year >= endingYear;

  const setPeriodValues = (val) => {
    if (selectedDate.length < 2) {
      setSelectedDate([...selectedDate, val]);
    } else {
      setSelectedDate([val]);
    }
  };

  const sortSelectedDates = () => {
    if (selectedDate[1] && new Date(selectedDate[0]) > new Date(selectedDate[1])) {
      selectedDate.reverse();
    }
  };

  sortSelectedDates();

  useEffect(() => {
    const dateFromMonthSelect = getDateForSelectedMonth(currentDate, indexOfSelectingMonth);
    setCurrentDate(dateFromMonthSelect);
  }, [activeMonth]);

  useEffect(() => {
    const dateFromYearSelect = getDateForSelectedYear(currentDate, activeYear);
    setCurrentDate(dateFromYearSelect);
  }, [activeYear]);

  console.log(selectedDate);
  return (
    <Styled.CalendarWrap>
      <Styled.CalendarHeader>
        <Styled.ArrowButton
          type="button"
          onClick={setPrevMonth}
          disabled={isDisabledPrevYearButton(
            currentMonth,
            currentYear,
            valueForYearSelect.startingYear
          )}
        >
          <PrevArrow />
        </Styled.ArrowButton>
        <Styled.CalendarHeaderDate>
          <Select active={activeMonth} onChange={chooseOptionMonth} options={monthNames} />
          <Select active={activeYear} onChange={chooseOptionYear} options={years} />
        </Styled.CalendarHeaderDate>
        <Styled.ArrowButton
          type="button"
          onClick={setNextMonth}
          disabled={isDisabledNextYearButton(
            currentMonth,
            currentYear,
            valueForYearSelect.endingYear
          )}
        >
          <NextArrow />
        </Styled.ArrowButton>
      </Styled.CalendarHeader>
      <Styled.CalendarTableHeader>
        {dayNames.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </Styled.CalendarTableHeader>
      <Styled.CalendarTableContent>
        {calendarDays.map((day, index) => (
          <Styled.CalendarDay
            variant={day.variant}
            // eslint-disable-next-line
            key={index}
            isActive={
              convertDate(day.dateValue) >= convertDate(selectedDate[0]) &&
              convertDate(day.dateValue) <= convertDate(selectedDate[1])
            }
            onClick={() => setPeriodValues(day.dateValue)}
          >
            {day.day}
          </Styled.CalendarDay>
        ))}
      </Styled.CalendarTableContent>
    </Styled.CalendarWrap>
  );
};

export default Calendar;
