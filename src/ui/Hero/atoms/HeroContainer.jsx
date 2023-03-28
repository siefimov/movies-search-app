import React from 'react';

const HeroContainer = ({ backgroundImages, children }) => {
    return (
        <div
            className={`p-8 h-[80vh] bg-local bg-cover`}
            style={{backgroundImage: `url('https://image.tmdb.org/t/p/original${backgroundImages}')`}}
        >{children}</div>
    );
};

export default HeroContainer;
