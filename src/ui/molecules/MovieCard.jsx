import React from 'react';
import { Link } from 'react-router-dom';

import * as URLS from '../../utils/api';

const MovieCard = ({ to, src, alt, title }) => {
    return (
        <li className='snap-center hover:z-10 transition duration-300 delay-500 ease-in-out hover:scale-150 hover:overflow-visible'>
            <Link to={to}>
                <img src={src} alt={alt} className='w-[200px] rounded-xl' />
                <h2 className='font-bold text-[#b5cdf5] w-[150px]'>{title}</h2>
            </Link>
        </li>
    );
};

export default MovieCard;
