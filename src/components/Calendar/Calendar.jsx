import React, { useEffect, useState } from 'react';
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

  const [selectedDate, setSelectedDate] = useState(null);
  const [currentDate, setCurrentDate] = useState(defaultDate);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const countOfDaysInMonth = new Date(year, month + 1, 0).getDate(); // +getCountOfDaysInMonth     // const countOfDaysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();

  const indexOfFirstDay = new Date(year, month, 1).getDay();   // +getIndexOfFirstDayInMonth           // const indexOfFirstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

  // const indexOfFirstDay = getIndexOfFirstDayInMonth(currentDate);

  const startingDayOfMonth = daysInWeek.indexOf(indexOfFirstDay) + 1;  // +getStartingDayOfMonth
  const lastDateOfPrevMonth = new Date(year, month, 0);     // +getLastDateInPrevMonth              // const lastDateOfPrevMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 0);
  let startingDayOfPrevMonth = lastDateOfPrevMonth.getDate() - daysInWeek.indexOf(indexOfFirstDay) + 1; // +getStartingDateOfPrevMonth

  const countOfDaysInPrevMonth = startingDayOfMonth - 1; // +getCountOfDaysInPrevMonth
  let currentNumberOfDayInMonth = 1;
  let startingDayOfNextMonth = 1;
  const countOfDayInNextMonth = countOfWeekInCalendar * countOfDayInWeek - (countOfDaysInPrevMonth + countOfDaysInMonth); // +getCountOfDayInNextMonth  // endingDayInNextMonth

  const setDateValue = (value) => new Date(value);

  console.log('setDateValue', setDateValue(selectedDate));
  console.log(selectedDate);

  // const dateValueOfPrevMonth = `${month === 0 ? year - 1 : year}-${month === 0 ? 12 : month}-${startingDayOfPrevMonth}`;
  // const dateValueOfCurrentMonth = `${year}-${month + 1}-${currentNumberOfDayInMonth}`;
  // const dateValueOfNextMonth = `${month === 11 ? year + 1 : year}-${month === 11 ? 1 : month + 2}-${startingDayOfNextMonth}`;

  const setDateValueOfPrevMonth = (day) => `${month === 0 ? year - 1 : year}-${month === 0 ? 12 : month}-${day}`

  const getDays = (countOfDays, calendar, dayOfMonth, variant, setValue) => {
    let daysCount = dayOfMonth;
    // eslint-disable-next-line
    for(let i = 1; i <= countOfDays; i++) {
      calendar.push({
        day: daysCount,
        variant,
        dateValue: setValue(daysCount)
      });
      daysCount += 1;
    }
  }

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

    // getDays(countOfDaysInPrevMonth, daysInCalendar, startingDayOfPrevMonth, 'otherMonth', setDateValueOfPrevMonth);
    getDaysOfPrevMonth(daysInCalendar);
    getDaysOfCurrentMonth(daysInCalendar);
    getDaysOfNextMonth(daysInCalendar);

    return daysInCalendar;
  }

  const calendar = getDaysOfCalendar();

  const getPrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1))
  }

  const getNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1))
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
            isActive={day.value === selectedDate}
            onClick={() => setSelectedDate(day.value)}
          >
            {day.day}
          </Styled.CalendarDay>
        ))}
      </Styled.CalendarTableContent>
    </Styled.CalendarWrap>
  )
};

export default Calendar;
