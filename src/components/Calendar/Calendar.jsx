import React, { useState } from 'react';
import NextArrow from '../Icons/NextArrow';
import PrevArrow from '../Icons/PrevArrow';
import * as CalendarFunc from './utils';
import { daysInWeek, dayNames, monthNames, countOfWeekInCalendar, countOfDayInWeek } from './constants'
import * as Styled from './styles';

const Calendar = () => {
  const defaultDate = new Date();
  const [currentDate, setCurrentDate] = useState(defaultDate);
  const [selectedDate, setSelectedDate] = useState(null);
  const currentDayOfCurrentMonth = 1;
  const startingDayOfNextMonth = 1;
  const countOfDaysInCurrentMonth = CalendarFunc.getCountOfDaysInCurrentMonth(currentDate);
  const indexOfFirstDayInMonth = CalendarFunc.getIndexOfFirstDayInMonth(currentDate);
  const startingDayOfCurrentMonth = CalendarFunc.getStartingDayOfMonth(daysInWeek, indexOfFirstDayInMonth);
  const lastDateOfPrevMonth = CalendarFunc.getLastDateOfPrevMonth(currentDate);
  const startingDayOfPrevMonth = CalendarFunc.getStartingDateOfPrevMonth(
    lastDateOfPrevMonth,
    daysInWeek,
    indexOfFirstDayInMonth
  );
  const countOfDaysInPrevMonth = CalendarFunc.getCountOfDaysInPrevMonth(startingDayOfCurrentMonth);
  const countOfDayInNextMonth = CalendarFunc.getCountOfDayInNextMonth(
    countOfWeekInCalendar,
    countOfDayInWeek,
    countOfDaysInPrevMonth,
    countOfDaysInCurrentMonth
  );
  const daysOfPrevMonth = CalendarFunc.getDaysOfMonthForCalendar(
    currentDate,
    countOfDaysInPrevMonth,
    startingDayOfPrevMonth,
    'otherMonth',
    CalendarFunc.setDateValueOfPrevMonth
  );
  const daysOfCurrentMonth = CalendarFunc.getDaysOfMonthForCalendar(
    currentDate,
    countOfDaysInCurrentMonth,
    currentDayOfCurrentMonth,
    'currentMonth',
    CalendarFunc.setDateValueOfCurrentMonth
  );
  const daysOfNextMonth = CalendarFunc.getDaysOfMonthForCalendar(
    currentDate,
    countOfDayInNextMonth,
    startingDayOfNextMonth,
    'otherMonth',
    CalendarFunc.setDateValueOfNextMonth
  );
  const calendarDays = CalendarFunc.concatDaysOfMonth(daysOfPrevMonth, daysOfCurrentMonth, daysOfNextMonth);
  const currentMonth = CalendarFunc.getIndexOfCurrentMonth(currentDate);
  const currentYear = CalendarFunc.getIndexOfCurrentYear(currentDate);
  const prevMonth = CalendarFunc.getPrevMonth(currentDate);
  const nextMonth = CalendarFunc.getNextMonth(currentDate);

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
              CalendarFunc.convertDate(day.dateValue) === CalendarFunc.convertDate(selectedDate)
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
