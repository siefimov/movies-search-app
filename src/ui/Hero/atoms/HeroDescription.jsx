import React from 'react';

const HeroDescription = ({children}) => {
    return (
        <div className='font-medium text-lg text-[#b5cdf5] mb-4 w-[45rem] max-w-[80vw] leading-[1.3]'>{children}</div>
    );
};

export default HeroDescription;
