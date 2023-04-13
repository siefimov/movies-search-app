import React from 'react';
import PropTypes from 'prop-types';

const CastList = ({ movie }) => {
  return (
    <>
      {movie.credits.cast.length > 0 ? (
        <div className='relative mx-auto mt-5 flex max-w-[1280px] flex-col overflow-hidden px-5'>
          <div className='my-2 text-xl font-bold text-white'>
            Top Billed Cast
          </div>
          <ul className='flex flex-wrap justify-center gap-4'>
            {movie.credits.cast.slice(0, 7).map(
              (actor) =>
                actor.profile_path && (
                  <li key={actor.id + Math.random()} className='cast-card'>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                      alt={`${actor.name} profile`}
                      className=' w-full rounded-t-xl '
                    />
                    <div className='p-3'>
                      <p className='mb-2 text-white'>{actor.name}</p>
                      <p className='text-[#b5cdf5]'>{actor.character}</p>
                    </div>
                  </li>
                )
            )}
          </ul>
        </div>
      ) : (
        <p className='m-5 p-5 text-center text-[#b5cdf5]'>
          Cast: Sorry, but API doesn't have any cast data for this movie :-(
        </p>
      )}
    </>
  );
};
CastList.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default CastList;
