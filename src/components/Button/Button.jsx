import React from 'react';
import PropTypes from 'prop-types';
import ButtonItem from './styles';

const Button = ({ text, type, variant }) => (
  <ButtonItem variant={variant} type={type}>
    {text}
  </ButtonItem>
)

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  variant: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  variant: 'primary',
};

export default Button
