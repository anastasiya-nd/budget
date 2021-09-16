import React, { useState } from 'react';
import Popover from '../Popover/Popover';
import * as Styled from './styles';

const PeriodPopover = () => {
  const [periodStart, setPeriodStart] = useState('');
  const [periodEnd, setPeriodEnd] = useState('');

  const handleChangePeriodStart = (date) => {
    setPeriodStart(date);
  };
  const handleChangePeriodEnd = (date) => {
    setPeriodEnd(date);
  };

  return (
    <Popover popoverLabel="Period">
      <Styled.PeriodCalendar
        rangeSelection
        periodStart={periodStart}
        periodEnd={periodEnd}
        setPeriodStart={handleChangePeriodStart}
        setPeriodEnd={handleChangePeriodEnd}
      />
    </Popover>
  );
};

export default PeriodPopover;
