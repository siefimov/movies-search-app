import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const setActive = ({ isActive }) => (isActive ? 'text-[#38bdf8]' : '');

const MenuItem = ({ to, value, peer }) => {
    return (
        <li className={`text-[#b5cdf5] hover:text-[#38bdf8] ${peer}`}>
            <NavLink to={to} className={setActive}>
                {value}
            </NavLink>
        </li>
    );
};

MenuItem.propTypes = {};

export default MenuItem;
