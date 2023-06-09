import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { genres } from '../../utils/db_categories';

export const MovieCard = ({
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

  const handleMouseEnter = () => {
    const id = setTimeout(() => setIsHovering(true), 500);
    setTimerId(id);
  };

  const handleMouseLeave = () => {
    clearTimeout(timerId);
    setIsHovering(false);
  };

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
        className='h-[260px] w-[180px] rounded-xl shadow-md shadow-info-500 min-[380px]:h-[260px] min-[380px]:max-w-[172px]'
      />

      <div
        className='delay-250 absolute top-3 left-[-8px] z-10 flex h-[230px] flex-col rounded-xl bg-[#1e293b] shadow-slate-50 transition-all duration-500'
        style={{
          width: isHovering ? '190px' : '0px',
          transform: isHovering ? 'scale(1.4)' : 'scale(0)',
          opacity: isHovering ? 1 : 0,
        }}
      >
        <div className='relative h-3/5'>
          <img
            src={src}
            alt={alt}
            className=' h-full w-full rounded-tl-xl rounded-tr-xl object-cover object-top'
          />
          <div className='absolute top-[5%] left-[5%] h-[40px] w-[40px]'>
            <CircularProgressbar
              value={vote_average}
              maxValue={10}
              text={`${vote_average}`}
              styles={buildStyles({
                pathColor: 'green',
                textColor: '#f34e06',
                textSize: '32px',
                backgroundColor: '#1e293b',
              })}
              background='true'
            />
          </div>
        </div>

        <div className='relative flex h-2/5 flex-col justify-center p-3'>
          <h3 className='mt-1 text-[16px] text-[#38bdf8]'>{title}</h3>
          <p className='my-2 text-[10px] text-[#8498bb]'>{release_date}</p>
          <div className='flex flex-wrap'>
            {genre_ids?.map((genre_id) => (
              <p
                key={Math.random()}
                className='mt-0 mr-1 rounded text-[10px] text-[#b4cbef]'
              >
                {genres
                  .filter((genre) => genre.id === genre_id)
                  .map((elem) => elem.name)}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

MovieCard.propTypes = {
  to: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string,
  vote_average: PropTypes.string,
  genre_ids: PropTypes.array,
};


