import React from 'react';
import PropTypes from 'prop-types';
import Popover from '../Popover/Popover';
import Content from './Content';

const LabelsPopover = ({ labels, setLabels, getSpending }) => {
  return (
    <Popover popoverLabel="Labels">
      <Content labels={labels} setLabels={setLabels} getSpending={getSpending} />
    </Popover>
  );
};

LabelsPopover.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  setLabels: PropTypes.func.isRequired,
  getSpending: PropTypes.func.isRequired,
};

export default LabelsPopover;
