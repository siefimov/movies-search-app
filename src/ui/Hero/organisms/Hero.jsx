import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import ReactModal from 'react-modal';
import { FaPlay } from 'react-icons/fa';

import HeroContainer from '../molecules/HeroContainer';
import HeroContentContainer from '../molecules/HeroContentContainer';
import HeroTitle from '../atoms/HeroTitle';
import HeroDescription from '../atoms/HeroDescription';
import HeroButton from '../atoms/HeroButton';

import { URL, API_KEY } from '../../../utils/api';

const Hero = ({ movie }) => {
  const [videoKey, setVideoKey] = useState(null);
  const [videoUrl, setVideoUrl] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  const fetchVideo = async () => {
    const response = await fetch(`${URL}movie/${movie.id}/videos${API_KEY}`);
    const data = await response.json();
    setVideoKey(data.results[0]?.key);
  };

  useEffect(() => {
    fetchVideo();
  }, [movie?.id]);

  const handleOpenModal = (url) => {
    setVideoUrl(url);
    setIsPlaying(true);
  };

  const handleCloseModal = () => {
    setIsPlaying(false);
    setVideoUrl(null);
  };

  return (
    <HeroContainer backgroundImages={movie?.backdrop_path}>
      <HeroContentContainer>
        <HeroTitle>{movie?.name || movie?.original_title}</HeroTitle>
        <HeroDescription>{movie?.overview}</HeroDescription>

        <HeroButton
          onClick={() =>
            handleOpenModal(`https://www.youtube.com/watch?v=${videoKey}`)
          }
        >
          <FaPlay className='text-[12px]' />
          Play Trailer
        </HeroButton>
        <HeroButton to={`/movies/trending/${movie?.id}/one`}>
          Details
        </HeroButton>
      </HeroContentContainer>
      <ReactModal
        isOpen={isPlaying}
        onRequestClose={handleCloseModal}
        className='hero-modal'
      >
        <button
          onClick={handleCloseModal}
          className='hero-close-modal'
        >
          X
        </button>
        <ReactPlayer
          url={videoUrl}
          controls={true}
          playing={true}
          width='65%'
          height='80%'
        />
      </ReactModal>
    </HeroContainer>
  );
};

export default Hero;
