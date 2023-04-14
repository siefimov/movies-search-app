import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const HeroButton = ({ to, children, onClick }) => {
  return (
    <Link to={to} onClick={onClick} className='hero-button '>
      {children}
    </Link>
  );
};

HeroButton.propTypes = {
  to: PropTypes.string,
}

HeroButton.defaultProps = {
  to: null,
}


export default HeroButton;
