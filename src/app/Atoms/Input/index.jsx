// Input.jsx

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const InputComponent = ({ type, placeholder, icon, error, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className={`input-group ${error ? 'error' : ''}`}>
      {icon && <i className={`input-icon ${icon}`} />}
      <input
        type={showPassword ? 'text' : type}
        placeholder={placeholder}
        {...rest}
      />
      {type === 'password' && (
        <i
          className={`input-icon ${
            showPassword ? 'far fa-eye-slash' : 'far fa-eye'
          }`}
          onClick={togglePasswordVisibility}
        />
      )}
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

InputComponent.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  error: PropTypes.string,
};

export default InputComponent;
