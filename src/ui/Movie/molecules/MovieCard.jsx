import React from 'react';
import { Link } from 'react-router-dom';

import * as URLS from '../../../utils/api';

const MovieCard = ({ to, src, alt, title }) => {
    return (
        <>
            <Link
                to={to}
                className='z-1 relative inline-block inline-flex items-center justify-center h-[260px] w-[172px] shadow-info-50 transition delay-300 duration-200 ease-in-out'
            >
                <img
                    src={src}
                    alt={alt}
                    className='h-auto max-h-[260px] w-full max-w-[172px] rounded-xl hover:z-20  '
                />
                {/* <h2 className='font-bold text-[#b5cdf5] w-[150px]'>{title}</h2> */}
            </Link>
        </>
    );
};

export default MovieCard;

// snap-center
