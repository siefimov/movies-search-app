import React from 'react';
import { Link } from 'react-router-dom';

const HeroButton = ({ to, children, onClick }) => {
  return (
    <Link to={to} onClick={onClick} className='hero-button '>
      {children}
    </Link>
  );
};

export default HeroButton;
