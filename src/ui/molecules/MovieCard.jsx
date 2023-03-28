import React from 'react';
import { Link } from 'react-router-dom';

import * as URLS from '../../utils/api';

const MovieCard = ({ to, src, alt, title }) => {
    return (
        <li className='inline-flex  snap-center z-0 hover:z-10 transition duration-200 delay-300 ease-in-out hover:scale-[2] hover:overflow-visible'>
            <Link to={to} className='inline-block w-[200px]'>
                <img
                    src={src}
                    alt={alt}
                    className='rounded-xl h-auto w-full '
                />
                {/* <h2 className='font-bold text-[#b5cdf5] w-[150px]'>{title}</h2> */}
            </Link>
        </li>
    );
};

export default MovieCard;

// snap-center
