import React from 'react';

const HeroDescription = ({ children }) => {
    return (
        <div className='mb-12 w-[45rem] max-w-[80vw] te min-[380px]:text-lg font-medium leading-[1.3] text-white bg-[rgba(0,0,0,0.3)] '>
            {children}
        </div>
    );
};

export default HeroDescription;
