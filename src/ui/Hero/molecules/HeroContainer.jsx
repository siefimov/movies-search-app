import React from 'react';

const HeroContainer = ({ backgroundImages, children }) => {
  return (
    <div
      style={{
        backgroundImage: ` url('https://image.tmdb.org/t/p/original/${backgroundImages}')`,
      }}
      className=' relative h-[80vh] bg-cover bg-local'
    >
      {children}
    </div>
  );
};

export default HeroContainer;
