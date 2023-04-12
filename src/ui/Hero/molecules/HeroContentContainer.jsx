import React from 'react';

function HeroContentContainer({ children }) {
    return <div className='absolute bottom-[5%] min-[380px]:bottom-[15%] left-[8%]'>{children}</div>;
}

export default HeroContentContainer;
