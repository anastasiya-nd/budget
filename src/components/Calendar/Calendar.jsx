import React, { useState } from 'react';
import NextArrow from '../Icons/NextArrow';
import PrevArrow from '../Icons/PrevArrow';
import { getPrevMonth, getNextMonth, calendarDays } from './utils'
import * as Styled from './styles';

const Calendar = () => {

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

  const [selectedDate, setSelectedDate] = useState(null);

  // const setDateValue = (value) => new Date(value);

  // console.log('setDateValue', setDateValue(selectedDate));
  // console.log(selectedDate);

  return (
    <Styled.CalendarWrap>
      <Styled.CalendarHeader>
        <Styled.ArrowButton type='button' onClick={getPrevMonth}>
          <PrevArrow />
        </Styled.ArrowButton>
        <Styled.CalendarHeaderDate>
          {/* <span>{monthNames[month]}</span>
          <span>{year}</span> */}
        </Styled.CalendarHeaderDate>
        <Styled.ArrowButton type='button' onClick={getNextMonth}>
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
