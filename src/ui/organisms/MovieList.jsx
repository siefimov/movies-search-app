import React, { useState, useEffect, memo, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import 'react-alice-carousel/lib/alice-carousel.css';
import PropTypes from 'prop-types';

import { MovieListTitle } from '../molecules';
import ListGrid from './ListGrid';
import ListCarousel from './ListCarousel';
import { movieCategories, genres } from '../../utils/db_categories';
import { movieApi } from '../../api/RestApis';
import {
  getTrendingMovies,
  getMoviesByCategories,
  getSimilarMovies,
  getMovieByTitle,
  getMovieByGenre,
} from '../../utils/';

const API_KEY = import.meta.env.VITE_API_KEY;

const MovieList = memo(({ category, display, genreId }) => {
  const { id, movieTitle } = useParams();

  const [movies, setMovies] = useState([]);
  const [isTitleHover, setIsTitleHover] = useState(false);
  const [isListHover, setIsListHover] = useState(false);
  const [movieGenre, setMovieGenre] = useState(null);
  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(0);

  const options = {
    category: category,
    movieApi: movieApi,
    setMovies: setMovies,
    setPageQty: setPageQty,
    setMovieGenre: setMovieGenre,
    page: page,
    API_KEY: API_KEY,
    id: id,
    movieTitle: movieTitle,
    genreId: genreId,
    genres: genres,
  };

  const getData = useCallback(async () => {
    switch (category) {
      case 'trending':
        await getTrendingMovies(options);
        break;
      case 'popular':
      case 'top_rated':
      case 'upcoming':
        await getMoviesByCategories(options);
        break;
      case 'similar':
        await getSimilarMovies(options);
        break;
      case 'search':
        await getMovieByTitle(options);
        break;
      default:
        await getMovieByGenre(options);      
    }
  }, [category, id, page, movieTitle, genreId]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className='mx-auto max-w-[1315px] pl-2'>
      <div
        onMouseEnter={() => setIsListHover(true)}
        onMouseLeave={() => setIsListHover(false)}
        className='gallery'
      >
        {movies.length > 0 ? (
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
        ) : (
          ''
        )}

        <ListGrid
          display={display}
          pageQty={pageQty}
          page={page}
          movies={movies}
          category={category}
          setPage={setPage}
        />

        <ListCarousel display={display} movies={movies} category={category} />
      </div>
    </div>
  );
});

MovieList.propTypes = {
  category: PropTypes.string.isRequired,
  display: PropTypes.string.isRequired,
  genreId: PropTypes.string,
};

export default MovieList;
