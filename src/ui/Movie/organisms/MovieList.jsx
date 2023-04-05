import React, { useState, useEffect } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { Pagination, Stack } from '@mui/material';

import PropTypes from 'prop-types';

import MovieCard from '../molecules/MovieCard';
import { URL, API_KEY, IMAGES_URL } from '../../../utils/api';
import { movieCategories, genres } from '../../../utils/db_categories';

const MovieList = ({ category, display, genreId }) => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const [arrowVisibility, setArrowVisibility] = useState(false);
  const [movieGenre, setMovieGenre] = useState(null);

  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(0);

  const getData = async () => {
    if (category === 'trending') {
      const resp = await fetch(`${URL}${category}/movie/week${API_KEY}&page=${page}`);
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
      const resp = await fetch(`${URL}movie/${id}/${category}${API_KEY}&page=${page}}`);
      const json = await resp.json();
      const result = await json.results;
      setMovies(result);
      setPageQty(json.total_pages);
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
  }, [category, page]);

  return (
    <div className='mx-auto max-w-[1360px] px-10'>
      <div>
        <div
          className='inline-flex items-center'
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          <p className='movie-genre cursor-pointer py-4 text-2xl font-bold text-[#b5cdf5]'>
            {movieCategories[category] || movieGenre}
          </p>

          {display == 'carousel' && (
            <Link
              to={`movies/${category}/${genreId ? genreId : null}`}
              className='flex items-center self-center'
            >
              {isShown && (
                <p className='pl-4 font-bold text-[#b5cdf5] hover:text-[#38bdf8] '>
                  see all movies
                </p>
              )}

              <FiArrowRight className='text-xl font-bold text-[#38bdf8]' />
            </Link>
          )}
        </div>
        {display === 'list-grid' && (
          <>
            <Stack spacing={2}>
              {/* {!!pageQty && ( */}
              <Pagination
                count={pageQty}
                page={page}
                onChange={(_, numPage) => (setPage(numPage) )}
                color='primary'
                variant='outlined'
                sx={{
                  button: { color: '#ffffff' },
                  ul: {
                    justifyContent: 'center',
                    marginBottom: '20px',
                  },
                }}
              />
              {/* )} */}
            </Stack>

            <ul className={display}>
              {movies.map((movie) => (
                <>
                  {movie.poster_path && (
                    <MovieCard
                    movie={movie}
                      key={`${movie.id} * ${Math.floor(Math.random() * 10)}`}
                      to={`/movies/${category}/${movie.id}/one`}
                      src={`${IMAGES_URL}${movie.poster_path}`}
                      alt={movie.title}
                      title={movie.title}
                    />
                  )}
                </>
              ))}
            </ul>
          </>
        )}

        {display === 'carousel' && (
          <AliceCarousel
          autoHeight
          animationType={'fadeout'}
          controlsStrategy={'responsive'}
          disableSlideInfo={false}
          touchTracking
          
            mouseTracking
            infinite
            disableDotsControls
            renderPrevButton={() => (
              <div className=' carousel-arrow carousel-arrow-left carouselPrevBtn'>
                &#60;
              </div>
            )}
            renderNextButton={() => (
              <div className='carousel-arrow carousel-arrow-right carouselNextBtn'>
                &#62;
              </div>
            )}
            responsive={{
              0: { items: 1 },
              576: { items: 2 },
              768: { items: 3 },
              840: { items: 4 },
              992: { items: 5, itemsFit: 'contain' },
              1200: { items: 6 },
            }}
          >
            {movies.map((movie) => (
              <>
                {movie.poster_path && (
                  <MovieCard
                    key={`${movie.id}_*_${Math.floor(Math.random() * 10)}`}
                    // to={`/movies/${movie.id}`}
                    to={`/movies/${category}/${movie.id}/one`}
                    src={`${IMAGES_URL}${movie.poster_path}`}
                    alt={movie.title}
                    title={movie.title}
                  />
                )}
              </>
            ))}
          </AliceCarousel>
        )}
      </div>
    </div>
  );
};

MovieList.propTypes = {};

export default MovieList;
