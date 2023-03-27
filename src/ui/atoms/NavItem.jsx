import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const setActive = ({ isActive }) => (isActive ? 'text-[#38bdf8]' : '');

const NavItem = ({ to, value }) => {
  
    return (
        <li className='hover:text-[#38bdf8]'>
            <NavLink to={to} className={setActive}>
                {value}
            </NavLink>
        </li>
    );
};

NavItem.propTypes = {};

export default NavItem;
