import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const setActive = ({ isActive }) => (isActive ? 'text-[#38bdf8]' : '');

export const MenuItem = ({ to, value, peer }) => {
  return (
    <li className={`font-bold text-[#b5cdf5] hover:text-[#38bdf8] ${peer}`}>
      <NavLink to={to} className={setActive}>
        {value}
      </NavLink>
    </li>
  );
};

MenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  peer: PropTypes.string,
};
MenuItem.defaultProps = {
  peer: null,
};


