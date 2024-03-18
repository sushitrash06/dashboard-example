import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.scss';

const Avatar = ({ text }) => {
  const getInitials = (text) => {
    return text
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase();
  };

  const bgColor = () => {
    const colors = ['#4CAF50', '#2196F3', '#f44336', '#FF9800', '#9C27B0'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className={'avatar'} style={{backgroundColor: bgColor()}}>
      {text ? getInitials(text) : ''}
    </div>
  );
};

Avatar.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default Avatar;
