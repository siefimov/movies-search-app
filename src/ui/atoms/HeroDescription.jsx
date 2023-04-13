import React from 'react';

const HeroDescription = ({ children }) => {
  return (
    <div className='te mb-12 w-[45rem] max-w-[80vw] bg-[rgba(0,0,0,0.3)] font-medium leading-[1.3] text-white min-[380px]:text-lg '>
      {children}
    </div>
  );
};

export default HeroDescription;
