import React from 'react';
import PropTypes from 'prop-types';

const Tagline = ({ movie }) => {
  return (
    <>
      <div className='font-bold italic text-slate-400'>{movie.tagline}</div>
    </>
  );
};

Tagline.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Tagline;
