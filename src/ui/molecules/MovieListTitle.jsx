import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import PropTypes from 'prop-types';

function MovieListTitle({
  movieCategories,
  category,
  movieGenre,
  display,
  genreId,
  isListHover,
  isTitleHover,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <div
      className='inline-flex items-center justify-start'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <p className=' movie-genre cursor-pointer bg-[#0f172a] pb-2 pt-4 text-2xl font-bold text-[#b5cdf5]'>
        {movieCategories[category] || movieGenre}
      </p>

      {display == 'carousel' && (
        <Link
          to={`movies/${category}/${genreId ? genreId : ''}`}
          className={`flex items-center self-center pb-2 pt-5`}
        >
          <>
            <FiArrowRight
              className={`text-3xl font-bold text-[#38bdf8] transition-all duration-150`}
              style={{
                width: isListHover ? '20px' : '0',
                translate: isTitleHover ? '135px' : '0px',
              }}
            />
          </>
          <p
            className={`overflow-hidden pl-2 text-[#b5cdf5] transition-all duration-500 hover:text-[#38bdf8] hover:underline`}
            style={{
              translateX: isTitleHover ? '0px' : '-200px',
              opacity: isTitleHover ? '1' : '0',
            }}
          >
            see all movies
          </p>
        </Link>
      )}
    </div>
  );
}

MovieListTitle.propTypes = {
  movieCategories: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
  movieGenre: PropTypes.array,
  display: PropTypes.string.isRequired,
  genreId: PropTypes.string,
  isListHover: PropTypes.bool.isRequired,
  isTitleHover: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default MovieListTitle;
