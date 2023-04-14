import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaPlay } from 'react-icons/fa';
import axios from 'axios';

import HeroButton from '../atoms/HeroButton';
import VideoModal from '../molecules/VideoModal';

import { URL, API_KEY, YOUTUBE, IMAGES_URL_ORIGINAL } from '../../utils/api';

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
    <div
      style={{
        backgroundImage: ` url('${IMAGES_URL_ORIGINAL}${movie?.backdrop_path}')`,
      }}
      className=' relative h-[80vh] bg-cover bg-local'
    >
      <div className='absolute bottom-[5%] left-[8%] min-[380px]:bottom-[15%]'>
        <div className='mb-4 text-[27px] font-bold text-[#cc3ea1] min-[380px]:text-5xl'>
          {movie?.name || movie?.original_title}
        </div>
        <div className='te mb-12 w-[45rem] max-w-[80vw] bg-[rgba(0,0,0,0.3)] font-medium leading-[1.3] text-white min-[380px]:text-lg '>
          {movie?.overview}
        </div>
        <HeroButton onClick={() => handleOpenModal(`${YOUTUBE}${videoKey}`)}>
          <FaPlay className='text-[12px]' />
          Play Trailer
        </HeroButton>
        <HeroButton to={`/movies/trending/${movie?.id}/one`}>
          Details
        </HeroButton>
      </div>

      <VideoModal
        isPlaying={isPlaying}
        handleCloseModal={handleCloseModal}
        videoUrl={videoUrl}
      />
    </div>
  );
};

Hero.propTypes = {
  movie: PropTypes.object,
};

Hero.defaultProps = {
  movie: null,
}
export default Hero;
