import React from 'react';
import PropTypes from 'prop-types';

import GenreButton from '../atoms/GenreButton';

const GenresFilter = ({ genres, selectedGenres, handleGenreClick }) => {
  return (
    <div className='border-b border-slate-300 pb-4'>
      <h2 className='mb-3 text-[#b5cdf5]'>GenresFilter</h2>
      <div className='text-white'>
        {genres.map((genre) => (
          <GenreButton
            key={genre.id}
            genre={genre}
            selectedGenres={selectedGenres}
            handleGenreClick={handleGenreClick}
          />
        ))}
      </div>
    </div>
  );
};

GenresFilter.propTypes = {
  genres: PropTypes.array.isRequired,
  selectedGenres: PropTypes.array.isRequired,
  handleGenreClick: PropTypes.func.isRequired,
};

export default GenresFilter;