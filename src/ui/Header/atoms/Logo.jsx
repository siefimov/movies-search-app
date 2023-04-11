import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({isMobile}) => {
    return (
        <div className={`uppercase flex-auto md:flex-initial text-2xl text-[#38bdf8] ${isMobile ? 'pl-12 pt-12' : ''}`}>
            <Link to='/'>
                Movies<span className='text-[#b4c6ef] italic'>se</span>
            </Link>
        </div>
    );
};

export default Logo;
