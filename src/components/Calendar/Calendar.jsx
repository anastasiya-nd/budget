import React, { useState } from 'react';
import NextArrow from '../Icons/NextArrow';
import PrevArrow from '../Icons/PrevArrow';
import * as Styled from './styles';

const Calendar = () => {
  const daysInWeek = [1, 2, 3, 4, 5, 6, 0];
  const daysNames = ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'];
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
  const rows = 6;
  const cols = 7;
  const calendarRows = [];
  const calendarCols = [];

  const [current, setDay] = useState(new Date());
  const [currentMonth, setMonth] = useState(new Date());

  const startingDate = new Date(currentMonth);
  const numberOfDay = new Date(startingDate.getFullYear(), startingDate.getMonth() + 1, 0).getDate();
  const firstDay = new Date(startingDate.getFullYear(), startingDate.getMonth(), 1).getDay();
  const startingDay = daysInWeek.indexOf(firstDay) + 1;
  const prevMonthLastDate = new Date(startingDate.getFullYear(), startingDate.getMonth(), 0);
  let prevMonthStartingDay = prevMonthLastDate.getDate() - daysInWeek.indexOf(firstDay) + 1;
  let currentMonthCounter = 1;
  let nextMonthStartingDay = 1;

  for(let i = 1; i < rows + 1; i += 1) {
    for(let j = 1; j < cols + 1; j += 1) {
      if(!calendarCols[i]) {
        calendarCols[i] = '';
      }

      if(i === 1) {
        if(j < startingDay) {
          calendarCols[i] = [...calendarCols[i], {
            day: prevMonthStartingDay,
            variant: 'otherMonth',
            value: `${startingDate.getMonth() === 0 ?
                    startingDate.getFullYear() - 1 :
                    startingDate.getFullYear()}-${startingDate.getMonth() === 0 ? 12 : startingDate.getMonth()}-${prevMonthStartingDay}`,
            key: `day${prevMonthStartingDay}`
          }];
          prevMonthStartingDay += 1;
        } else {
          calendarCols[i] = [...calendarCols[i], {
            day: currentMonthCounter,
            variant: 'currentMonth',
            value: `${startingDate.getFullYear()}-${startingDate.getMonth() + 1}-${currentMonthCounter}`,
            key: `day${currentMonthCounter}`
          }];
          currentMonthCounter += 1;
        }
      } else if(i > 1 && currentMonthCounter <= numberOfDay) {
        calendarCols[i] = [...calendarCols[i], {
          day: currentMonthCounter,
          variant: 'currentMonth',
          value: `${startingDate.getFullYear()}-${startingDate.getMonth() + 1}-${currentMonthCounter}`,
          key: `day${currentMonthCounter}`
        }];
        currentMonthCounter += 1;
      } else {
        calendarCols[i] = [...calendarCols[i], {
          day: nextMonthStartingDay,
          variant: 'otherMonth',
          value: `${startingDate.getMonth() === 11 ?
            startingDate.getFullYear() + 1 :
            startingDate.getFullYear()}-${startingDate.getMonth() === 11 ? 1 : startingDate.getMonth() + 2}-${nextMonthStartingDay}`,
          key: `day${nextMonthStartingDay}`
      }];
        nextMonthStartingDay += 1;
      }
    }
    calendarRows.push({
      key: `week${i}`,
      cols: calendarCols[i]
    }) ;
  }

  const getDate = (date) => {
    setDay(date)
  }

  const getPrevMonth = () => {
    setMonth(prevValue => new Date(prevValue.getFullYear(), prevValue.getMonth() - 1, 1))
  }

  const getNextMonth = () => {
    setMonth(nextValue => new Date(nextValue.getFullYear(), nextValue.getMonth() + 1, 1))
  }

  return (
    <Styled.CalendarWrap>
      <Styled.CalendarHeader>
        <Styled.ArrowButton type='button' onClick={getPrevMonth}>
          <PrevArrow />
        </Styled.ArrowButton>
        <Styled.CalendarHeaderDate>
          <span>{monthNames[startingDate.getMonth()]}</span>
          <span>{startingDate.getFullYear()}</span>
        </Styled.CalendarHeaderDate>
        <Styled.ArrowButton type='button' onClick={getNextMonth}>
          <NextArrow/>
        </Styled.ArrowButton>
      </Styled.CalendarHeader>
      <table>
        <thead>
          <Styled.TableHeaderRow>
            {daysNames.map(day => <Styled.TableHeaderCol key={day}>{day}</Styled.TableHeaderCol>)}
          </Styled.TableHeaderRow>
        </thead>
        <tbody>
          {calendarRows.map(row => (
            <Styled.TableRow key={row.key}>
              {row.cols.map(col => (
                <Styled.TableCol
                  variant={col.variant}
                  key={col.key}
                  isActive={col.value === current}
                  onClick={() => getDate(col.value)}
                >
                  {col.day}
                </Styled.TableCol>
              ))}
            </Styled.TableRow>
          ))}
        </tbody>
      </table>
    </Styled.CalendarWrap>
  )
};

export default Calendar;
