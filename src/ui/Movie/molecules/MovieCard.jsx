import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { URL, API_KEY } from '../../../utils/api';

const MovieCard = ({
  movie,
  to,
  src,
  alt,
  title,
  release_date,
  vote_average,
  genres
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    return () => {
      clearTimeout(timerId);
    };
  }, [timerId]);

  function handleMouseEnter() {
    const id = setTimeout(() => setIsHovering(true), 500);
    setTimerId(id);
  }

  function handleMouseLeave() {
    clearTimeout(timerId);
    setIsHovering(false);
  }

  return (
    <Link
      to={to}
      className='movie-card-link'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={src}
        alt={alt}
        className='h-auto max-h-[260px] w-full max-w-[172px] rounded-xl'
      />

      <div
        className='delay-250 absolute top-3 left-0 z-10 flex h-[230px] w-[260px] rounded-xl bg-[#1e293b] shadow-slate-50 transition-all duration-500'
        style={{
          width: isHovering ? '260px' : '0px',
          transform: isHovering ? 'scale(1.4)' : 'scale(0)',
          opacity: isHovering ? 1 : 0,
        }}
      >
        <div className='relative w-3/5'>
          <img
            src={src}
            alt={alt}
            className=' h-full w-full rounded-tl-xl rounded-bl-xl object-cover'
          />
          <div className='absolute bottom-[15%] right-[-30px] h-[40px] w-[40px]'>
            <CircularProgressbar
              value={vote_average}
              maxValue={10}
              text={`${vote_average}`}
              styles={buildStyles({
                pathColor: 'green',
                backgroundColor: '#0f172a',
              })}
            />
          </div>
        </div>
        <div className='relative w-2/5 p-3'>
          <h3 className='mt-3 text-base text-[#38bdf8]'>{title}</h3>
          <span className='text-[10px] text-[#8498bb]'>{release_date}</span>
          {/* <span>
          {movie.genres.map((genre) => (
            <span
              key={Math.random()}
              className='mr-2 bg-yellow-600 px-1 text-white rounded'
            >
              {genre.name}
            </span>
          ))}
        </span> */}
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
