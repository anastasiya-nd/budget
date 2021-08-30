import React, { useState } from 'react';
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
  convertDate
} from './utils';
import { daysInWeek, dayNames, monthNames, countOfWeekInCalendar, countOfDayInWeek } from './constants'
import * as Styled from './styles';

const Calendar = () => {
  const defaultDate = new Date();
  const [currentDate, setCurrentDate] = useState(defaultDate);
  const [selectedDate, setSelectedDate] = useState(null);
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
  const prevMonth = getPrevMonth(currentDate);
  const nextMonth = getNextMonth(currentDate);

  const setPrevMonth = () => setCurrentDate(prevMonth);
  const setNextMonth = () => setCurrentDate(nextMonth);

  return (
    <Styled.CalendarWrap>
      <Styled.CalendarHeader>
        <Styled.ArrowButton type='button' onClick={setPrevMonth}>
          <PrevArrow />
        </Styled.ArrowButton>
        <Styled.CalendarHeaderDate>
          <span>{monthNames[currentMonth]}</span>
          <span>{currentYear}</span>
        </Styled.CalendarHeaderDate>
        <Styled.ArrowButton type='button' onClick={setNextMonth}>
          <NextArrow/>
        </Styled.ArrowButton>
      </Styled.CalendarHeader>
      <Styled.CalendarTableHeader>
        {dayNames.map(day => <div key={day}>{day}</div>)}
      </Styled.CalendarTableHeader>
      <Styled.CalendarTableContent>
        {calendarDays.map((day, index) => (
          <Styled.CalendarDay
            variant={day.variant}
            // eslint-disable-next-line
            key={index}
            isActive={
              convertDate(day.dateValue) === convertDate(selectedDate)
            }
            onClick={() => setSelectedDate(day.dateValue)}
          >
            {day.day}
          </Styled.CalendarDay>
        ))}
      </Styled.CalendarTableContent>
    </Styled.CalendarWrap>
  )
};

export default Calendar;
