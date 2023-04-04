import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaPlay } from 'react-icons/fa';
import ReactPlayer from 'react-player';
import ReactModal from 'react-modal';

import MovieList from '../ui/Movie/organisms/MovieList';
import HeroButton from '../ui/Hero/atoms/HeroButton';
import { URL, API_KEY } from '../utils/api';

const SingleMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  const [videoUrl, setVideoUrl] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  const goBack = () => navigate(-1);

  const getMovieData = async () => {
    const resp = await fetch(
      `${URL}movie/${id}${API_KEY}&append_to_response=credits,images,videos`
    );
    const json = await resp.json();
    setMovie(json);
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
    <div className='mt-[83px] flex flex-col justify-center py-10'>
      {movie && (
        <>
          <div className='relative w-full bg-gradient-to-r from-slate-800 to-blue-900'>
            <div className='mx-auto my-8 flex w-full max-w-[1280px] px-5 items-start gap-12'>
              <img
                src={`https://www.themoviedb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
                className='w-[300px] rounded-xl '
              />
              <div className='flex flex-col gap-3 pr-6 text-slate-100'>
                <div className='flex flex-wrap items-center'>
                  <h1 className='mr-3 text-3xl font-bold text-sky-500'>
                    {movie.title}
                  </h1>
                  <div className='text-2xl text-[#b5cdf5]'>
                    ({movie.release_date.split('-')[0]})
                  </div>
                </div>
                <div className='flex flex-wrap items-center justify-start gap-2'>
                  <span className='mr-2 rounded border-2 border-slate-500 py-0 px-1 font-semibold text-slate-400'>
                    R
                  </span>
                  <span>{movie.release_date}</span>
                  &#9900;
                  <span>
                    {
                      movie.genres.map((genre) => (
                        <span
                          key={Math.random()}
                          className='mr-2 bg-yellow-600 px-1 text-white'
                        >
                          {genre.name}
                        </span>
                      ))
                      // .join(', ')
                    }
                  </span>
                  &#9900;
                  <span>
                    {Math.floor(movie.runtime / 60)}h{movie.runtime % 60}m
                  </span>
                </div>

                <div className='mb-[30px] flex w-full max-w-[420px] items-center'>
                  <div className='h-[60px] w-[60px]'>
                    <CircularProgressbar
                      value={movie.vote_average}
                      maxValue={10}
                      text={`${movie.vote_average}`}
                      styles={buildStyles({
                        pathColor: 'green',
                      })}
                    />
                  </div>
                  <p className='mx-[20px]'>
                    User <br /> Score
                  </p>

                 {movie.videos.results.length > 0 && <HeroButton
                    onClick={() =>
                      handleOpenModal(
                        `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`
                      )
                    }
                    className='border-none'
                  >
                    <FaPlay />
                    Play Trailer
                  </HeroButton>}
                </div>
                <div className='font-bold italic text-slate-400'>
                  {movie.tagline}
                </div>
                <div className='mb-5 flex flex-col'>
                  <span className='mb-2 text-2xl font-semibold'>Overview</span>
                  {movie.overview}
                </div>
                <div className='flex flex-wrap justify-start gap-5'>
                  <div className='flex max-h-[120px] flex-col overflow-hidden'>
                    <div className='mb-2 text-sm font-bold'>Directors:</div>
                    {movie.credits.crew
                      .filter(
                        (elem) => elem['known_for_department'] === 'Directing'
                      )
                      .map((item) => (
                        <div key={item.id + Math.random()} className='text-xs text-slate-400'>
                          {item.name}
                        </div>
                      ))}
                  </div>
                  <div className='flex max-h-[120px] flex-col overflow-hidden'>
                    <div className='mb-2 text-sm font-bold'>Co-Producers:</div>
                    {movie.credits.crew
                      .filter(
                        (elem) => elem['known_for_department'] === 'Production'
                      )
                      .map((item) => (
                        <div key={item.id + Math.random()} className='text-xs text-slate-400'>
                          {item.name}
                        </div>
                      ))}
                  </div>
                  <div className='flex max-h-[120px] flex-col overflow-hidden'>
                    <div className='mb-2 text-sm font-bold'>Writers:</div>
                    {movie.credits.crew
                      .filter(
                        (elem) => elem['known_for_department'] === 'Writing'
                      )
                      .map((item) => (
                        <div key={item.id + Math.random()} className='text-xs text-slate-400'>
                          {item.name}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='mx-auto mt-5 flex max-w-[1280px] flex-col px-5'>
            <div className='my-2 text-xl font-bold text-white'>Cast</div>
            <ul className='list-scroll shadow-[inset_-45px_0px_34px_0px_rgba(233,243,245,0.55);]'>
              {movie.credits.cast.map(
                (item) =>
                  item.profile_path && (
                    <li
                      key={item.id + Math.random()}
                      className='inline-block h-[275px] min-w-[140px] w-[140px] rounded-xl border border-slate-100 text-xs mb-5'
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                        alt={`${item.name} profile`}
                        className=' w-full rounded-t-xl '
                      />
                      <div className='p-3'>
                        <p className='mb-2 text-white'>{item.name}</p>
                        <p className='text-[#b5cdf5]'>{item.character}</p>
                      </div>
                    </li>
                  )
              )}
            </ul>
          </div>
          <div className='mx-auto mb-12 mt-10 w-full max-w-[1280px] px-5 text-slate-300 '>
            <h2 className='text-2xl'>You may also like</h2>
            <MovieList category='similar' display='carousel' />
          </div>
        </>
      )}
      <Link
        onClick={goBack}
        className='mx-auto rounded-xl border py-2 px-8 font-bold text-[#b5cdf5] hover:border-sky-600'
      >
        Go Back
      </Link>

      <ReactModal
        isOpen={isPlaying}
        onRequestClose={handleCloseModal}
        className='fixed top-0 left-0 flex h-[100%] w-[100%] flex-col items-center justify-center bg-[rgba(0,0,0,0.7)]'
      >
        <button
          onClick={handleCloseModal}
          className='mt-4 rounded-full border bg-[#1e293b] px-4 py-2 text-[#b5cdf5] hover:bg-[#303e54]'
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
    </div>
  );
};

export default SingleMovie;

// https://api.themoviedb.org/3/movie/603692?api_key=83cb5904bd2f84699c28a99d9d4a0289&language=en-US&append_to_response=credits
// https://api.themoviedb.org/3/movie/1077280?api_key=83cb5904bd2f84699c28a99d9d4a0289&language=en-US&append_to_response=credits

// 4,600,000.00
//  90,000,000.00
// 244,878,306.00