import React, { useState, useEffect, memo, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import 'react-alice-carousel/lib/alice-carousel.css';
import PropTypes from 'prop-types';

import { MovieListTitle } from '../molecules';
import ListGrid from './ListGrid';
import ListCarousel from './ListCarousel';

import { movieCategories, genres } from '../../utils/db_categories';
import { movieApi } from '../../api/RestApis';

import { getTrendingMovies } from '../../utils/getMovies';
// import { movieFunctionData } from '../../utils/getMovies';

const API_KEY = import.meta.env.VITE_API_KEY;

const MovieList = memo(({ category, display, genreId }) => {
  const { id, movieTitle } = useParams();

  const [movies, setMovies] = useState([]);
  const [isTitleHover, setIsTitleHover] = useState(false);
  const [isListHover, setIsListHover] = useState(false);
  const [movieGenre, setMovieGenre] = useState(null);
  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(0);

  const getData = useCallback(async () => {
    switch (category) {
      case 'trending':
        await getTrendingMovies(category, movieApi, setMovies, setPageQty, page, API_KEY);
        // const trendingMovies = await movieApi.get(`${category}/movie/week`, {
        //   params: { api_key: API_KEY, page },
        // });
        // setPageQty(trendingMovies.total_pages);
        // setMovies(trendingMovies.results);
        break;
      case 'popular':
      case 'top_rated':
      case 'upcoming':
        const moviesByCategory = await movieApi.get(`movie/${category}`, {
          params: {
            api_key: API_KEY,
            language: 'US',
            include_image_language: 'en,jp,uk,null',
            page,
          },
        });
        setMovies(moviesByCategory.results);
        setPageQty(moviesByCategory.total_pages);
        break;
      case 'similar':
        const similarMovies = await movieApi.get(`movie/${id}/${category}`, {
          params: {
            api_key: API_KEY,
            page,
          },
        });
        setMovies(similarMovies.results);
        setPageQty(similarMovies.total_pages);
        break;
      case 'search':
        const moviesByTitle = await movieApi.get(`${category}/movie`, {
          params: {
            api_key: API_KEY,
            query: movieTitle,
            page,
          },
        });
        setMovies(moviesByTitle.results);
        setPageQty(moviesByTitle.total_pages);
        break;
      default:
        const movieByGenre = await movieApi.get(`${category}/movie`, {
          params: {
            api_key: API_KEY,
            genreId,
            page,
          },
        });

        setMovies(movieByGenre.results);
        setPageQty(movieByGenre.total_pages);

        const currentMovieGenres = genres.filter(
          (genre) => genre.id === +genreId
        );
        setMovieGenre(currentMovieGenres[0].name);
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
