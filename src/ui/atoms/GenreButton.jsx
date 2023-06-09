import React from 'react';
import PropTypes from 'prop-types';

export const GenreButton = ({ genre, selectedGenres, handleGenreClick }) => {
  return (
    <button
      onClick={() => handleGenreClick(genre?.id)}
      className={`${
        selectedGenres.includes(genre?.id) ? 'active-genre' : undefined
      } mr-2 mb-1 rounded-2xl border px-2 hover:bg-slate-500`}
    >
      {genre.name}
    </button>
  );
};

GenreButton.propTypes = {
  genre: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
  selectedGenres: PropTypes.array.isRequired,
  handleGenreClick: PropTypes.func.isRequired,
};
