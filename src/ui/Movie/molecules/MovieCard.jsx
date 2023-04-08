import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { URL, API_KEY } from '../../../utils/api';

import { genres } from '../../../utils/db_categories';

const MovieCard = ({
  movie,
  to,
  src,
  alt,
  title,
  release_date,
  vote_average,
  genre_ids,
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
          <div className='absolute top-[5%] left-[5%] h-[40px] w-[40px]'>
            <CircularProgressbar
              value={vote_average}
              maxValue={10}
              text={`${vote_average}`}
              styles={buildStyles({
                pathColor: 'green',
                textColor: '#f34e06',
                textSize: '36px',
                backgroundColor: '#0f172a',
              })}
            />
          </div>
        </div>
        <div className='relative flex w-2/5 flex-col justify-center p-3'>
          <h3 className='mt-2 text-base text-[#38bdf8]'>{title}</h3>
          <p className='my-2 text-[10px] text-[#8498bb]'>{release_date}</p>
          <span>
            {genre_ids?.map((genre_id) => (
              <p
                key={Math.random()}
                className='mt-1 rounded text-[10px] text-[#b4cbef]'
              >
                {genres
                  .filter((genre) => genre.id === genre_id)
                  .map((elem) => elem.name)}
              </p>
            ))}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
