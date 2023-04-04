import React, { useState, useEffect } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

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

  const getData = async () => {
    if (category === 'trending') {
      const resp = await fetch(`${URL}${category}/movie/week${API_KEY}`);
      const json = await resp.json();
      const result = await json.results;
      setMovies(result);
    } else if (
      category === 'popular' ||
      category === 'top_rated' ||
      category === 'upcoming'
    ) {
      const resp = await fetch(
        `${URL}movie/${category}${API_KEY}&language=en-US&include_image_language=en,jp,uk,null`
      );
      const json = await resp.json();
      const result = await json.results;
      setMovies(result);
    } else if (category === 'similar') {
      const resp = await fetch(`${URL}movie/${id}/${category}${API_KEY}`);
      const json = await resp.json();
      const result = await json.results;
      setMovies(result);
    } else {
      const resp = await fetch(
        `${URL}${category}/movie${API_KEY}&with_genres=${genreId}`
      );
      const json = await resp.json();
      const result = await json.results;
      setMovies(result);

      const currentMovieGenre = genres.filter((genre) => genre.id === +genreId);
      setMovieGenre(currentMovieGenre[0].name);
    }
  };

  useEffect(() => {
    getData();
  }, [category]);

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
          <ul className={display}>
            {movies.map((movie) => (
              <>
                {movie.poster_path && (
                  <MovieCard
                    key={`${movie.id} * ${Math.floor(Math.random() * 10)}`}
                    // to={`/movies/${movie.id}`}
                    to={`/movies/${category}/${movie.id}/one`}
                    src={`${IMAGES_URL}${movie.poster_path}`}
                    alt={movie.title}
                    title={movie.title}
                  />
                )}
              </>
            ))}
          </ul>
        )}

        {display === 'carousel' && (
          <AliceCarousel
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
              992: { items: 5 },
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
