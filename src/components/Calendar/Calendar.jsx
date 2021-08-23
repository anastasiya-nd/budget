import React, { useState } from 'react';
import NextArrow from '../Icons/NextArrow';
import PrevArrow from '../Icons/PrevArrow';
import * as Styled from './styles';

const Calendar = () => {
  const daysInWeek = [1, 2, 3, 4, 5, 6, 0];
  const dayNames = ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'];
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const countOfWeekInCalendar = 6;
  const countOfDayInWeek = 7;
  const defaultDate = new Date();

  const [currentDate, setcurrentDate] = useState(defaultDate);
  const [currentMonth, setCurrentMonth] = useState(defaultDate);

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const countOfDaysInMonth = new Date(year, month + 1, 0).getDate();      // const countOfDaysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const indexOfFirstDay = new Date(year, month, 1).getDay();              // const indexOfFirstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
  const startingDayOfMonth = daysInWeek.indexOf(indexOfFirstDay) + 1;
  const lastDateOfPrevMonth = new Date(year, month, 0);                   // const lastDateOfPrevMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 0);
  let startingDayOfPrevMonth = lastDateOfPrevMonth.getDate() - daysInWeek.indexOf(indexOfFirstDay) + 1;
  const countOfDaysInPrevMonth = startingDayOfMonth - 1;
  let currentNumberOfDayInMonth = 1;
  let startingDayOfNextMonth = 1;
  const countOfDayInNextMonth = countOfWeekInCalendar * countOfDayInWeek - (countOfDaysInPrevMonth + countOfDaysInMonth);  // endingDayInNextMonth

  const getDaysOfPrevMonth = (calendar) => {
    if( countOfDaysInPrevMonth !== 1) {
      // eslint-disable-next-line
      for(let i = 1; i <= countOfDaysInPrevMonth; i++) {
        calendar.push({
          day: startingDayOfPrevMonth,
          variant: 'otherMonth',
          value: `${month === 0 ? year - 1 : year}-${month === 0 ? 12 : month}-${startingDayOfPrevMonth}`,
        });
        startingDayOfPrevMonth += 1;
      }
    }
  }

  const getDaysOfCurrentMonth = (calendar) => {
    // eslint-disable-next-line
    for(let i = 1; i <= countOfDaysInMonth; i++) {
      calendar.push({
        day: currentNumberOfDayInMonth,
        variant: 'currentMonth',
        value: `${year}-${month + 1}-${currentNumberOfDayInMonth}`,
      });
      currentNumberOfDayInMonth += 1;
    }
  }

  const getDaysOfNextMonth = (calendar) => {
    // eslint-disable-next-line
    for(let i = 1; i <= countOfDayInNextMonth; i++) {
      calendar.push({
        day: startingDayOfNextMonth,
        variant: 'otherMonth',
        value: `${month === 11 ? year + 1 : year}-${month === 11 ? 1 : month + 2}-${startingDayOfNextMonth}`,
        key: `day${startingDayOfNextMonth}`
      });
      startingDayOfNextMonth += 1;
    }
  }

  const getDaysOfCalendar = () => {
    const daysInCalendar = [];

    getDaysOfPrevMonth(daysInCalendar);
    getDaysOfCurrentMonth(daysInCalendar);
    getDaysOfNextMonth(daysInCalendar);

    return daysInCalendar;
  }

  const calendar = getDaysOfCalendar();

  const getPrevMonth = () => {
    setCurrentMonth(prevValue => new Date(prevValue.getFullYear(), prevValue.getMonth() - 1, 1))
  }

  const getNextMonth = () => {
    setCurrentMonth(nextValue => new Date(nextValue.getFullYear(), nextValue.getMonth() + 1, 1))
  }

  return (
    <Styled.CalendarWrap>
      <Styled.CalendarHeader>
        <Styled.ArrowButton type='button' onClick={getPrevMonth}>
          <PrevArrow />
        </Styled.ArrowButton>
        <Styled.CalendarHeaderDate>
          <span>{monthNames[month]}</span>
          <span>{year}</span>
        </Styled.CalendarHeaderDate>
        <Styled.ArrowButton type='button' onClick={getNextMonth}>
          <NextArrow/>
        </Styled.ArrowButton>
      </Styled.CalendarHeader>
      <Styled.CalendarTableHeader>
        {dayNames.map(day => <div key={day}>{day}</div>)}
      </Styled.CalendarTableHeader>
      <Styled.CalendarTableContent>
        {calendar.map((day, index) => (
          <Styled.CalendarDay
            variant={day.variant}
            // eslint-disable-next-line
            key={index}
            isActive={day.value === currentDate}
            onClick={() => setcurrentDate(day.value)}
          >
            {day.day}
          </Styled.CalendarDay>
        ))}
      </Styled.CalendarTableContent>
    </Styled.CalendarWrap>
  )
};

export default Calendar;
