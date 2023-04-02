import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const SubMenuItem = ({ to, value }) => {
    return (
        <NavLink
            to={to}
            className='px-5 py-3 text-[14px] hover:text-[#38bdf8] rounded bg-[#1e293b] hover:bg-[#203048] text-[#b5cdf5]'
        >
            {value}
        </NavLink>
    );
};

export default SubMenuItem;
