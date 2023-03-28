import React from 'react';

const HeroButton = ({children}) => {
    return (
        <div className='cursor-pointer font-bold rounded px-8 py-2 mr-2 bg-sky-300 hover:bg-sky-200 hover:text-black hover:transition-all max-w-fit inline-block'>
            {children}
        </div>
    );
};

export default HeroButton;
