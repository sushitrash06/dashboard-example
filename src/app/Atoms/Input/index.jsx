import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Input.scss';
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import { validateEmail } from '@/app/utlis';

const InputComponent = ({ type, label, icon, error, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'email') {
      if (!validateEmail(value)) {
        setEmailError('Invalid email format');
      } else {
        setEmailError('');
      }
    }
    rest.onChange(event);
  };

  const labelId = `input-${Math.random().toString(36).substring(2, 15)}`;

  return (
    <div className={`input-group ${error || emailError ? 'error' : ''}`}>
      {label && <label htmlFor={labelId}>{label}</label>}
      {icon && <i className={`input-icon ${icon}`} />}
      <input
        className='input-box'
        type={showPassword ? 'text' : type}
        onChange={handleInputChange}
        {...rest}
      />
      {type === 'password' && (
        <div className='input-icon' onClick={togglePasswordVisibility}>
          {showPassword ? <IoEyeSharp /> : <IoEyeOffSharp />}
        </div>
      )}
      {(error || emailError) && <span className="error-message">{error || emailError}</span>}
    </div>
  );
};

InputComponent.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  icon: PropTypes.string,
  error: PropTypes.string,
};

export default InputComponent;
