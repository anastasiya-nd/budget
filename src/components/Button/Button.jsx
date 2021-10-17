import React from 'react';
import PropTypes from 'prop-types';
import { ButtonItem } from './styles';

const Button = ({ text, type, variant, onClick, className }) => (
  <ButtonItem variant={variant} type={type} onClick={onClick} className={className}>
    {text}
  </ButtonItem>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func, //eslint-disable-line
  className: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  variant: 'primary',
  className: '',
};

export default Button;
