import React from 'react';

const HeroContainer = ({ backgroundImages, children }) => {
    return (
        <div
            className=' relative h-[80vh] bg-cover bg-local'
            style={{
                backgroundImage: ` url('https://image.tmdb.org/t/p/original${backgroundImages}')`,
            }}
        >
            {children}
        </div>
    );
};

export default HeroContainer;
