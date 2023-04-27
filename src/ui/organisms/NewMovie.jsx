import React, { useState, useEffect } from 'react';

import { movieApi } from '../../api/RestApis';
console.log({ movieApi });
const API_KEY = import.meta.env.VITE_API_KEY;

export const NewMovie = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState('trending');

  const getMovie = async () => {
    const trendingMovies = await movieApi.get(`${category}/movie/week`, {
      params: {
        api_key: API_KEY,
        page,
      },
    });

    setMovies(trendingMovies.results);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className='mt-16'>
      <h2 className='text-white'>TITLE</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie?.id} className='text-white'>
            <span className='text-sky-200'>{movie?.title}, </span>
            <span className='text-sky-100'>{movie?.release_date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
