import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Hero from '../ui/Hero/organisms/Hero';
import MovieList from '../ui/Movie/organisms/MovieList';
import { URL, API_KEY, endpoints } from '../../src/utils/api';

const Home = () => {
  const [trending, setTrending] = useState([]);

  const handleTrendings = async () => {
    const responseTrending = await axios.get(
      URL + endpoints.trending + API_KEY
    );
    setTrending(responseTrending.data.results);

    // const responseTrending = await fetch(URL + endpoints.trending + API_KEY);
    // const jsonTrending = await responseTrending.json();
    // setTrending(jsonTrending.results);
  };

  useEffect(() => {
    handleTrendings();
  }, []);

  console.log(trending);

  return (
    <>
      <Hero
        movie={trending[Math.floor(Math.random() * trending.length)]}
        id={trending.id}
      />
      <MovieList category='trending' display='carousel' />
      <MovieList category='discover' display='carousel' genreId='35' />
      <MovieList category='discover' display='carousel' genreId='18' />
      <MovieList category='discover' display='carousel' genreId='28' />
      <MovieList category='discover' display='carousel' genreId='14' />
      <MovieList category='discover' display='carousel' genreId='53' />
    </>
  );
};

export default Home;
