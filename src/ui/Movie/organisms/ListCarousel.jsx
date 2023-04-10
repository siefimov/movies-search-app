import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import PropTypes from 'prop-types';

import MovieCard from '../molecules/MovieCard';
import { IMAGES_URL } from '../../../utils/api';

const ListCarousel = ({ display, movies, category }) => {
  return (
    <>
      {display === 'carousel' && (
        movies.length > 0 ?
        <AliceCarousel   
          animationType={'fadeout'}
          controlsStrategy={'responsive'}
          touchTracking
          infinite
          disableDotsControls
          renderPrevButton={() => (
            <div className='carousel-arrow carousel-arrow-left carouselPrevBtn'>
              &#60;
            </div>
          )}
          renderNextButton={() => (
            <div className='carousel-arrow carousel-arrow-right carouselNextBtn'>
              &#62;
            </div>
          )}
          responsive={{
            0: { items: 2, itemsFit: 'contain' },
            576: { items: 2 },
            768: { items: 3 },
            840: { items: 4 },
            992: { items: 5, itemsFit: 'fill' },
            1200: { items: 6 },
          }}
        >
          {movies.map((movie) => (
            <>
              {movie.poster_path && (
                <MovieCard
                  key={`${movie.id}_*_${Math.floor(Math.random() * 10)}`}
                  to={`/movies/${category}/${movie.id}/one`}
                  src={`${IMAGES_URL}${movie.poster_path}`}
                  alt={movie.title}
                  title={movie.title}
                  release_date={movie.release_date}
                  vote_average={movie.vote_average.toFixed(1)}
                  genre_ids={movie.genre_ids}
                />
              )}
            </>
          ))}
        </AliceCarousel> 
        : <p className='mt-3'>Sorry, API cannot provide any similar movies &#128543;</p>
      )}
    </>
  );
};

ListCarousel.propTypes = {
  display: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired,
};


export default ListCarousel;
