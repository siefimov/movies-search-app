import React from 'react';
import { Link } from 'react-router-dom';

const SubMenuItem = ({ to, value }) => {
    return (
        <Link
            to={to}
            className='px-5 py-3 text-[14px] hover:text-[#38bdf8] rounded bg-[#1e293b] hover:bg-[#203048] text-[#b5cdf5]'
        >
            {value}
        </Link>
    );
};

export default SubMenuItem;
