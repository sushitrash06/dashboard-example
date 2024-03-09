import React from 'react';
import './Card.scss';

const Card = ({ children, size }) => {
  const cardClasses = `card ${size ? size : ''}`;

  return <div className={cardClasses}>{children}</div>;
};

export default Card;
