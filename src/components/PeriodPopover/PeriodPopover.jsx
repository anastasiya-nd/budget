import React from 'react';
import PropTypes from 'prop-types';
import Popover from '../Popover/Popover';
import * as Styled from './styles';

const PeriodPopover = ({ periodStart, periodEnd, handleChangePeriodStart, handleChangePeriodEnd, getSpending }) => { //eslint-disable-line
  return (
    <Popover popoverLabel="Period">
      <>
        <Styled.PeriodCalendar
          rangeSelection
          periodStart={periodStart}
          periodEnd={periodEnd}
          setPeriodStart={handleChangePeriodStart}
          setPeriodEnd={handleChangePeriodEnd}
        />
        <Styled.ButtonItem text="Apply" onClick={getSpending} />
      </>
    </Popover>
  );
};

PeriodPopover.propTypes = {
  periodStart: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  periodEnd: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  handleChangePeriodStart: PropTypes.func.isRequired,
  handleChangePeriodEnd: PropTypes.func.isRequired,
  getSpending: PropTypes.func.isRequired,
};

PeriodPopover.defaultProps = {
  periodStart: '',
  periodEnd: '',
};

export default PeriodPopover;
