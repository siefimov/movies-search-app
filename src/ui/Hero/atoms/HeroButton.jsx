import React from 'react';
import { Link } from 'react-router-dom';

const HeroButton = ({ to, children, onClick }) => {
    return (
        <Link to={to} onClick={onClick} className='hero-button cursor-pointer'>
            {children}
        </Link>
    );
};

export default HeroButton;
