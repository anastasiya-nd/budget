import React from 'react';
import PropTypes from 'prop-types';
import Popover from '../Popover/Popover';
import * as Styled from './styles';

const PeriodPopover = ({
  periodStart,
  periodEnd,
  handleChangePeriodStart,
  handleChangePeriodEnd,
  onApply,
}) => {
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
        <Styled.ButtonItem text="Apply" onClick={onApply} />
      </>
    </Popover>
  );
};

PeriodPopover.propTypes = {
  periodStart: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]), //eslint-disable-line
  periodEnd: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]), //eslint-disable-line
  handleChangePeriodStart: PropTypes.func.isRequired,
  handleChangePeriodEnd: PropTypes.func.isRequired,
  onApply: PropTypes.func.isRequired,
};

PeriodPopover.defaultProps = {
  periodStart: '',
  periodEnd: '',
};

export default PeriodPopover;
