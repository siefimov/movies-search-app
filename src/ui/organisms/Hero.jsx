import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaPlay } from 'react-icons/fa';
import axios from 'axios';

import HeroContainer from '../../ui/molecules/HeroContainer';
import HeroContentContainer from '../../ui/molecules/HeroContentContainer';
import HeroTitle from '../atoms/HeroTitle';
import HeroDescription from '../atoms/HeroDescription';
import HeroButton from '../atoms/HeroButton';
import VideoModal from '../molecules/VideoModal';

import { URL, API_KEY } from '../../utils/api';

const Hero = ({ movie }) => {
  const [videoKey, setVideoKey] = useState(null);
  const [videoUrl, setVideoUrl] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  const fetchVideo = async () => {
    const response = await axios.get(
      `${URL}movie/${movie.id}/videos${API_KEY}`
    );
    setVideoKey(response.data.results[0]?.key);
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

      <VideoModal
        isPlaying={isPlaying}
        handleCloseModal={handleCloseModal}
        videoUrl={videoUrl}
      />
    </HeroContainer>
  );
};

Hero.propTypes = {
  movie: PropTypes.object.isRequired,
};
export default Hero;