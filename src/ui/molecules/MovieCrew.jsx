import React from 'react';
import PropTypes from 'prop-types';

export const MovieCrew = ({ movie }) => {
  return (
    <div className='flex flex-wrap justify-start gap-5'>
      <div className='flex max-h-[120px] flex-col overflow-hidden'>
        <div className='mb-2 text-sm font-bold'>Directors:</div>
        {movie.credits.crew
          .filter((elem) => elem['known_for_department'] === 'Directing')
          .map((item) => (
            <div
              key={item.id + Math.random()}
              className='text-xs text-slate-400'
            >
              {item.name}
            </div>
          ))}
      </div>

      <div className='flex max-h-[120px] flex-col overflow-hidden'>
        <div className='mb-2 text-sm font-bold'>Co-Producers:</div>
        {movie.credits.crew
          .filter((elem) => elem['known_for_department'] === 'Production')
          .map((item) => (
            <div
              key={item.id + Math.random()}
              className='text-xs text-slate-400'
            >
              {item.name}
            </div>
          ))}
      </div>

      <div className='flex max-h-[120px] flex-col overflow-hidden'>
        <div className='mb-2 text-sm font-bold'>Writers:</div>
        {movie.credits.crew
          .filter((elem) => elem['known_for_department'] === 'Writing')
          .map((item) => (
            <div
              key={item.id + Math.random()}
              className='text-xs text-slate-400'
            >
              {item.name}
            </div>
          ))}
      </div>
    </div>
  );
};

MovieCrew.propTypes = {
  movie: PropTypes.shape({
    credits: PropTypes.shape({
      crew: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      }),
    }),
  }).isRequired,
};
