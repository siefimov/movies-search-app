import React from 'react';

const SingleMoviePageWrapper = ({ children }) => {
  return (
    <div className='mt-[83px] flex flex-col justify-center py-10'>
      {children}
    </div>
  );
};

SingleMoviePageWrapper.propTypes = {
  // children: PropTypes.oneOfType([
  //   PropTypes.arrayOf(PropTypes.node),
  //   PropTypes.node,
  // ]),
};

export default SingleMoviePageWrapper;
