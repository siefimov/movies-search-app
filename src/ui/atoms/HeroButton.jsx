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
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
}

HeroButton.defaultProps = {
  to: null,
  onClick: () => {},
}


export default HeroButton;
