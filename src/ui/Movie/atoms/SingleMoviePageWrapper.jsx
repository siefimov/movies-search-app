import React from 'react';

const SingleMoviePageWrapper = ({ children }) => {
  return (
    <div className='mt-[73px] flex flex-col justify-center py-10'>
      {children}
    </div>
  );
};

SingleMoviePageWrapper.propTypes = {
  // children: PropTypes.node,
};

export default SingleMoviePageWrapper;
