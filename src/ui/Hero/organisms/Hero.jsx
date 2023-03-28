import React from 'react';

import HeroButton from '../atoms/HeroButton';
import HeroContainer from '../atoms/HeroContainer';
import HeroDescription from '../atoms/HeroDescription';
import HeroTitle from '../atoms/HeroTitle';

const Hero = ({ movie }) => {
    return (
        <HeroContainer backgroundImages={movie?.backdrop_path}>
            <HeroTitle>{movie?.name}</HeroTitle>
            <HeroDescription>{movie?.overview}</HeroDescription>
            <HeroButton>Play</HeroButton>
            <HeroButton>My List</HeroButton>
        </HeroContainer>
    );
};

export default Hero;
