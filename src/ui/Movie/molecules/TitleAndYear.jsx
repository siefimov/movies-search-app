import React from 'react';
import PropTypes from 'prop-types';

const TitleAndYear = ({ movie }) => {
  return (
    <>
      <div className='flex flex-wrap items-center'>
        <h1 className='mr-3 text-3xl font-bold text-sky-500'>{movie.title}</h1>
        <div className='text-2xl text-[#b5cdf5]'>
          ({movie.release_date.split('-')[0]})
        </div>
      </div>
    </>
  );
};

TitleAndYear.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default TitleAndYear;
