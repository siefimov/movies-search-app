import React from 'react';

const HeroDescription = ({ children }) => {
    return (
        <div className='mb-12 w-[45rem] max-w-[80vw] text-lg font-medium leading-[1.3] text-[#FF4500]'>
            {children}
        </div>
    );
};

export default HeroDescription;
