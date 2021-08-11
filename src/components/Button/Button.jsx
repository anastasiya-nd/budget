import React from 'react';
import PropTypes from 'prop-types';
import ButtonItem from './styles';

const Button = ({ text, variant}) => (
  <ButtonItem className={variant} type="button" onClick={() => console.log('A method')}>
    {text}
  </ButtonItem>
)

Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.string
};

Button.defaultProps = {
  variant: 'primary',
};

export default Button
