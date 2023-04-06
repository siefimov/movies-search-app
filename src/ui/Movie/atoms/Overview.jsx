import React from 'react';
import PropTypes from 'prop-types';

const Overview = ({ movie }) => {
  return (
    <>
      <div className='mb-5 flex flex-col'>
        <span className='mb-2 text-2xl font-semibold'>Overview</span>
        {movie.overview}
      </div>
    </>
  );
};

Overview.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Overview;
