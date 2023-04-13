import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaPlay } from 'react-icons/fa';

import HeroButton from '../atoms/HeroButton';

const ScorePlayBtn = ({ movie, handleOpenModal }) => {
  return (
    <div className='mb-[30px] flex w-full max-w-[420px] items-center'>
      <div className='h-[60px] w-[60px]'>
        <CircularProgressbar
          value={movie.vote_average}
          maxValue={10}
          text={`${movie.vote_average.toFixed(2)}`}
          styles={buildStyles({
            pathColor: 'green',
            textColor: '#f34e06',
            textSize: '32px',
          })}
        />
      </div>
      <p className='mx-[20px]'>
        User <br /> Score
      </p>

      {movie.videos.results.length > 0 && (
        <HeroButton
          onClick={() =>
            handleOpenModal(
              `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`
            )
          }
          className='border-none'
        >
          <FaPlay />
          Play
        </HeroButton>
      )}
    </div>
  );
};

ScorePlayBtn.propTypes = {
  movie: PropTypes.object.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
};

export default ScorePlayBtn;
