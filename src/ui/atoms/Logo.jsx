import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Logo = ({ isMobile }) => {
  return (
    <div
      className={`flex-auto text-3xl uppercase text-[#38bdf8] md:flex-initial ${
        isMobile ? 'pl-12 pt-12' : ''
      }`}
    >
      <Link to='/'>
        Movies<span className='italic text-[#b4c6ef]'>se</span>
      </Link>
    </div>
  );
};

Logo.propTypes = {
  isMobile: PropTypes.bool,
};
Logo.defaultProps = {
  isMobile: false,
};

export default Logo;
