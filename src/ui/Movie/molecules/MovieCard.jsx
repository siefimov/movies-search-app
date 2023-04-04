import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ to, src, alt }) => {
  return (
    <>
      <Link
        to={to}
        className='z-1 relative inline-flex h-[260px] w-[172px] items-center justify-center shadow-info-50 transition delay-300 duration-200 ease-in-out'
      >
        <img
          src={src}
          alt={alt}
          className='h-auto max-h-[260px] w-full max-w-[172px] rounded-xl hover:z-20  '
        />
      </Link>
    </>
  );
};

export default MovieCard;
