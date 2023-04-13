import React from 'react';

const HeroTitle = ({ children }) => {
    return (
        <div className='mb-4 text-[27px] min-[380px]:text-5xl font-bold text-[#cc3ea1]'>{children}</div>
    );
};

export default HeroTitle;
