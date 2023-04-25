import React, { useState, useEffect, memo } from 'react';
import { useParams } from 'react-router-dom';
import 'react-alice-carousel/lib/alice-carousel.css';
import PropTypes from 'prop-types';

import { MovieListTitle } from '../molecules';
import ListGrid from './ListGrid';
import ListCarousel from './ListCarousel';

import { movieCategories, genres } from '../../utils/db_categories';
import { movieApi } from '../../api/RestApis';

const MovieList = memo(({ category, display, genreId }) => {
  const { id, movieTitle } = useParams();

  const [movies, setMovies] = useState([]);
  const [isTitleHover, setIsTitleHover] = useState(false);
  const [isListHover, setIsListHover] = useState(false);
  const [movieGenre, setMovieGenre] = useState(null);
  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(0);

  const getData = async () => {
    switch (category) {
      case 'trending':
        const trendingMovies = await movieApi.get(category, { category, page });
        setPageQty(trendingMovies.total_pages);
        setMovies(trendingMovies.results);
        break;
      case 'popular':
      case 'top_rated':
      case 'upcoming':
        const moviesByCategory = await movieApi.get(category, { category, page });
        setMovies(moviesByCategory.results);
        setPageQty(moviesByCategory.total_pages);
        break;
      case 'similar':
        const similarMovies = await movieApi.get(category, { id, category, page });
        setMovies(similarMovies.results);
        setPageQty(similarMovies.total_pages);
        break;
      case 'search':
        const moviesByTitle = await movieApi.get(category, {
          category,
          movieTitle,
          page,
        });
        setMovies(moviesByTitle.results);
        setPageQty(moviesByTitle.total_pages);
        break;
      default:
        const movieByGenre = await movieApi.get('', { category, genreId, page });

        setMovies(movieByGenre.results);
        setPageQty(movieByGenre.total_pages);

        const currentMovieGenres = genres.filter(
          (genre) => genre.id === +genreId
        );
        setMovieGenre(currentMovieGenres[0].name);
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
