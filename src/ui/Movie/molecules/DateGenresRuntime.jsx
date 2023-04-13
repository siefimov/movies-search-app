import React from 'react';
import PropTypes from 'prop-types';

function DateGenresRuntime({ movie }) {
  return (
    <>
      <div className='flex flex-wrap items-center justify-start gap-2'>
        <span className='mr-2 rounded border-2 border-slate-500 py-0 px-1 font-semibold text-slate-400'>
          R
        </span>
        <span>{movie.release_date}</span>
        &#9900;
        <span>
          {movie.genres.map((genre) => (
            <span
              key={Math.random()}
              className='mr-2 mb-1 bg-yellow-600 px-1 text-white rounded inline-block'
            >
              {genre.name}
            </span>
          ))}
        </span>
        &#9900;
        <span >
          {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
        </span>
      </div>
    </>
  );
}

DateGenresRuntime.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default DateGenresRuntime;
