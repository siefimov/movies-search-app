import React from 'react';
import PropTypes from 'prop-types';

const MovieListWrapper = ({ children, onMouseEnter, onMouseLeave }) => {
  return (
    <div className='mx-auto max-w-[1315px] px-5'>
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className='gallery'
      >
        {children}
      </div>
    </div>
  );
};

MovieListWrapper.propTypes = {
  // children: PropTypes.element.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default MovieListWrapper;
