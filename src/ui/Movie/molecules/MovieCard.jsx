import React from 'react';
import { Link } from 'react-router-dom';

import * as URLS from '../../../utils/api';

const MovieCard = ({ to, src, alt, title }) => {
    return (
        <>
            <li className='z-1 relative inline-flex snap-center shadow-info-50 transition delay-300 duration-200 ease-in-out'>
                <Link to={to} className='inline-block h-[300px] w-[200px] '>
                    <img
                        src={src}
                        alt={alt}
                        className='h-auto max-h-[260px] w-full max-w-[172px] rounded-xl hover:z-20  '
                    />
                    {/* <h2 className='font-bold text-[#b5cdf5] w-[150px]'>{title}</h2> */}
                </Link>
            </li>
        </>
    );
};

export default MovieCard;

// snap-center
