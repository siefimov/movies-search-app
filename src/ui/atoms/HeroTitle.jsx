import React from 'react';

const HeroTitle = ({ children }) => {
  return (
    <div className='mb-4 text-[27px] font-bold text-[#cc3ea1] min-[380px]:text-5xl'>
      {children}
    </div>
  );
};

export default HeroTitle;
