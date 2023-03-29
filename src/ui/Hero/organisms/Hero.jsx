import React from 'react';


import HeroContainer from '../atoms/HeroContainer';
import HeroContentContainer from '../molecules/HeroContentContainer';
import HeroTitle from '../atoms/HeroTitle';
import HeroDescription from '../atoms/HeroDescription';
import HeroButton from '../atoms/HeroButton';

const Hero = ({ movie }) => {
    return (
        <HeroContainer backgroundImages={movie?.backdrop_path}>
            <HeroContentContainer>
              <HeroTitle>{movie?.name || movie?.original_title}</HeroTitle>
              <HeroDescription>{movie?.overview}</HeroDescription>
              <HeroButton>Play</HeroButton>
              <HeroButton>My List</HeroButton>
            </HeroContentContainer>
        </HeroContainer>
    );
};

export default Hero;
