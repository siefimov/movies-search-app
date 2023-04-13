import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import MovieList from '../ui/organisms/MovieList';
import { URL, API_KEY } from '../utils/api';
import VideoModal from '../ui/molecules/VideoModal';
import CastList from '../ui/organisms/CastList';
import GoBackButton from '../ui/atoms/GoBackButton';
import TitleAndYear from '../ui/molecules/TitleAndYear';
import DateGenresRuntime from '../ui/molecules/DateGenresRuntime';
import ScorePlayBtn from '../ui/molecules/ScorePlayBtn';
import MovieCrew from '../ui/molecules/MovieCrew';
import Poster from '../ui/atoms/Poster';
import Overview from '../ui/atoms/Overview';
import Tagline from '../ui/atoms/Tagline';

const SingleMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [videoUrl, setVideoUrl] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  const goBack = () => navigate(-1);

  const getMovieData = async () => {
    const response = await axios.get(
      `${URL}movie/${id}${API_KEY}&append_to_response=credits,images,videos`
    );
    setMovie(response.data);
  };

  useEffect(() => {
    getMovieData();
  }, [id]);

  const handleOpenModal = (url) => {
    setVideoUrl(url);
    setIsPlaying(true);
  };

  const handleCloseModal = () => {
    setIsPlaying(false);
    setVideoUrl(null);
  };

  return (
    <div className='mx-auto mt-[73px] flex max-w-[1240px] flex-col justify-center py-10'>
      <GoBackButton goBack={goBack} />
      {movie && (
        <>
          <div className='relative w-full bg-gradient-to-r from-slate-800 to-blue-900'>
            <div className='mx-auto my-8 flex w-full max-w-[1280px] flex-col items-start gap-12 px-5 md:flex-row'>
              <Poster movie={movie} />
              <div className='flex flex-col gap-3 pr-6 text-slate-100'>
                <TitleAndYear movie={movie} />
                <DateGenresRuntime movie={movie} />

                <ScorePlayBtn movie={movie} handleOpenModal={handleOpenModal} />

                <Tagline movie={movie} />
                <Overview movie={movie} />
                <MovieCrew movie={movie} />
              </div>
            </div>
          </div>

          <CastList movie={movie} />

          <div className='mx-auto mb-12 mt-10 w-full max-w-[1315px] text-slate-300 '>
            <h2 className='text-2xl'>You may also like</h2>
            <MovieList category='similar' display='carousel' />
          </div>
        </>
      )}

      <VideoModal
        isPlaying={isPlaying}
        handleCloseModal={handleCloseModal}
        videoUrl={videoUrl}
      />
    </div>
  );
};

export default SingleMovie;
