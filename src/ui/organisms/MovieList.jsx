import React, { useState, useEffect, memo } from 'react';
import { useParams } from 'react-router-dom';
import 'react-alice-carousel/lib/alice-carousel.css';
import axios from 'axios';

import PropTypes from 'prop-types';

import { MovieListTitle } from '../molecules';
import ListGrid from './ListGrid';
import ListCarousel from './ListCarousel';

import { URL, API_KEY } from '../../utils/api';
import { movieCategories, genres } from '../../utils/db_categories';

import { getTrendingMovies } from '../../api/RestApi';
import { getMoviesByCategories } from '../../api/RestApi';
import { getSimilarMovies } from '../../api/RestApi';
import { getMovieByTitle } from '../../api/RestApi';
import { getMoviesByGenre } from '../../api/RestApi';

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
      const trendingMovies = await getTrendingMovies(category, page);

      setPageQty(trendingMovies.total_pages);
      setMovies(trendingMovies.results);
    } else if (
      category === 'popular' ||
      category === 'top_rated' ||
      category === 'upcoming'
    ) {
      const movies = await getMoviesByCategories(category, page);

      setMovies(movies.results);
      setPageQty(movies.total_pages);
    } else if (category === 'similar') {
      const similarMovies = await getSimilarMovies(id, category, page);

      setMovies(similarMovies.results);
      setPageQty(similarMovies.total_pages);
    } else if (category === 'search') {
      const moviesByTitle = await getMovieByTitle(category, movieTitle, page);

      setMovies(moviesByTitle.results);
      setPageQty(moviesByTitle.total_pages);

      const currentMovieGenre = genres.filter((genre) => genre.id === +genreId);
      setMovieGenre(currentMovieGenre[0].name);
    } else {
      const movieByGenre = await getMoviesByGenre(category, genreId, page);
      setMovies(movieByGenre.results);
      setPageQty(movieByGenre.total_pages);

      const currentMovieGenre = genres.filter((genre) => genre.id === +genreId);
      setMovieGenre(currentMovieGenre[0].name);
    }
  };

  useEffect(() => {
    getData();
  }, [category, page, movieTitle]);

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
