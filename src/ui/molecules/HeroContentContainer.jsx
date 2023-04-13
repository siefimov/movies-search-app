import React from 'react';

const HeroContentContainer = ({ children }) => {
  return (
    <div className='absolute bottom-[5%] left-[8%] min-[380px]:bottom-[15%]'>
      {children}
    </div>
  );
};

export default HeroContentContainer;
