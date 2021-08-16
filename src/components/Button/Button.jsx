import React from 'react';
import PropTypes from 'prop-types';
import { ButtonItem } from './styles';

const Button = ({ text, type, variant, onClick }) => (
  <ButtonItem variant={variant} type={type} onClick={onClick}>
    {text}
  </ButtonItem>
)

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  type: 'button',
  variant: 'primary',
};

export default Button
