import React from 'react';
import PropTypes from 'prop-types';

function MovieListWrapper({ children, onMouseEnter, onMouseLeave }) {
  return (
    <div className='mx-auto max-w-[1360px] px-10 '>
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </div>
    </div>
  );
}

MovieListWrapper.propTypes = {
  // children: PropTypes.element.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired
};

export default MovieListWrapper;
