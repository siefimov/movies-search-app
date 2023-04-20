import React from 'react';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';

export const SubMenuItem = ({ to, value }) => {
  return (
    <NavLink
      to={to}
      className='rounded bg-[#1e293b] px-5 py-3 text-[14px] text-[#b5cdf5] hover:bg-[#203048] hover:text-[#38bdf8]'
    >
      {value}
    </NavLink>
  );
};

SubMenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
