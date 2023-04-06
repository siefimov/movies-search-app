import React from 'react';
import PropTypes from 'prop-types';

const MainBlockWrapper = ({ children }) => {
  return (
    <>
      <div className='relative w-full bg-gradient-to-r from-slate-800 to-blue-900'>
        <div className='mx-auto my-8 flex w-full max-w-[1280px] items-start gap-12 px-5'>
          {children}
        </div>
      </div>
    </>
  );
};

MainBlockWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainBlockWrapper;
