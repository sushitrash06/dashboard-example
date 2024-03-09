// Button.jsx

import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ onClick, text, type }) => {
  return (
    <button className={`button ${type}`} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['regular', 'secondary', 'warning']),
};

Button.defaultProps = {
  type: 'regular',
};

export default Button;
