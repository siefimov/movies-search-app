import React, { useState, useEffect, memo } from 'react';
import { useParams } from 'react-router-dom';
import 'react-alice-carousel/lib/alice-carousel.css';

import PropTypes from 'prop-types';

import MovieListWrapper from '../atoms/MovieListWrapper';
import MovieListTitle from '../molecules/MovieListTitle';
import ListGrid from './ListGrid';
import ListCarousel from './ListCarousel';

import { URL, API_KEY } from '../../../utils/api';
import { movieCategories, genres } from '../../../utils/db_categories';

const MovieList = memo(({ category, display, genreId }) => {
  const { id, movieTitle } = useParams();

  const [movies, setMovies] = useState([]);
  const [isTitleHover, setIsTitleHover] = useState(false);
  const [isListHover, setIsListHover] = useState(false);
  const [movieGenre, setMovieGenre] = useState(null);
  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(0);

  const getData = async () => {
    if (category === 'trending') {
      const resp = await fetch(
        `${URL}${category}/movie/week${API_KEY}&page=${page}`
      );
      const json = await resp.json();
      const result = await json.results;
      setMovies(result);
      setPageQty(json.total_pages);
    } else if (
      category === 'popular' ||
      category === 'top_rated' ||
      category === 'upcoming'
    ) {
      const resp = await fetch(
        `${URL}movie/${category}${API_KEY}&language=en-US&include_image_language=en,jp,uk,null&page=${page}`
      );
      const json = await resp.json();
      const result = await json.results;
      setMovies(result);
      setPageQty(json.total_pages);
    } else if (category === 'similar') {
      const resp = await fetch(
        `${URL}movie/${id}/${category}${API_KEY}&page=${page}}`
      );
      const json = await resp.json();
      const result = await json.results;
      setMovies(result);
      setPageQty(json.total_pages);
    } else if (category === 'search') {
      const resp = await fetch(
        `${URL}${category}/movie${API_KEY}&query=${movieTitle}&page=${page}`
      );
      const json = await resp.json();
      const result = await json.results;
      setMovies(result);
      setPageQty(json.total_pages);

      const currentMovieGenre = genres.filter((genre) => genre.id === +genreId);
      setMovieGenre(currentMovieGenre[0].name);
    } else {
      const resp = await fetch(
        `${URL}${category}/movie${API_KEY}&with_genres=${genreId}&page=${page}`
      );
      const json = await resp.json();
      const result = await json.results;
      setMovies(result);
      setPageQty(json.total_pages);

      const currentMovieGenre = genres.filter((genre) => genre.id === +genreId);
      setMovieGenre(currentMovieGenre[0].name);
    }
  };

  useEffect(() => {
    getData();
  }, [category, page, movieTitle]);

  return (
    <MovieListWrapper
      onMouseEnter={() => setIsListHover(true)}
      onMouseLeave={() => setIsListHover(false)}
    >
      <MovieListTitle
        onMouseEnter={() => setIsTitleHover(true)}
        onMouseLeave={() => setIsTitleHover(false)}
        movieCategories={movieCategories}
        category={category}
        movieGenre={movieGenre}
        display={display}
        genreId={genreId}
        isListHover={isListHover}
        isTitleHover={isTitleHover}
      />

      <ListGrid
        display={display}
        pageQty={pageQty}
        page={page}
        movies={movies}
        category={category}
        setPage={setPage}
      />

      <ListCarousel 
       display={display}
       movies={movies}
       category={category}
      />

    </MovieListWrapper>
  );
});

MovieList.propTypes = {};

export default MovieList;
