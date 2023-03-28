import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div className='uppercase text-3xl text-[#38bdf8]'>
            <Link to='/'>
                Movies<span className='text-[#b4c6ef] italic'>se</span>
            </Link>
        </div>
    );
};

export default Logo;
