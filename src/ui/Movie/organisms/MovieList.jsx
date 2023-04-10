import React, { useState, useEffect, memo } from 'react';
import { useParams } from 'react-router-dom';
import 'react-alice-carousel/lib/alice-carousel.css';
import axios from 'axios';

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
      const response = await axios.get(
        `${URL}${category}/movie/week${API_KEY}&page=${page}`
      );
      setPageQty(response.data.total_pages);
      setMovies(response.data.results);
    } else if (
      category === 'popular' ||
      category === 'top_rated' ||
      category === 'upcoming'
    ) {
      const response = await axios.get(
        `${URL}movie/${category}${API_KEY}&language=en-US&include_image_language=en,jp,uk,null&page=${page}`
      );
      setMovies(response.data.results);
      setPageQty(response.data.total_pages);
    } else if (category === 'similar') {
      const response = await axios.get(
        `${URL}movie/${id}/${category}${API_KEY}&page=${page}}`
      );
      setMovies(response.data.results);
      setPageQty(response.data.total_pages);
    } else if (category === 'search') {
      const response = await axios.get(
        `${URL}${category}/movie${API_KEY}&query=${movieTitle}&page=${page}`
      );
      setMovies(response.data.results);
      setPageQty(response.data.total_pages);

      const currentMovieGenre = genres.filter((genre) => genre.id === +genreId);
      setMovieGenre(currentMovieGenre[0].name);
    } else {
      const response = await axios.get(
        `${URL}${category}/movie${API_KEY}&with_genres=${genreId}&page=${page}`
      );
      setMovies(response.data.results);
      setPageQty(response.data.total_pages);

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
    { movies.length > 0 ? <MovieListTitle
        onMouseEnter={() => setIsTitleHover(true)}
        onMouseLeave={() => setIsTitleHover(false)}
        movieCategories={movieCategories}
        category={category}
        movieGenre={movieGenre}
        display={display}
        genreId={genreId}
        isListHover={isListHover}
        isTitleHover={isTitleHover}
      /> : ""}

      <ListGrid
        display={display}
        pageQty={pageQty}
        page={page}
        movies={movies}
        category={category}
        setPage={setPage}
      />

      <ListCarousel display={display} movies={movies} category={category} />
    </MovieListWrapper>
  );
});

MovieList.propTypes = {};

export default MovieList;
