import React from 'react';
import PropTypes from 'prop-types';

const Poster = ({ movie }) => {
  return (
    <>
      <img
        src={`https://www.themoviedb.org/t/p/original/${movie.poster_path}`}
        alt={movie.title}
        className='w-[300px] rounded-xl self-center'
      />
    </>
  );
};

Poster.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Poster;
