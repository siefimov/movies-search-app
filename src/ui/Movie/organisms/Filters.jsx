import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import UserScoreFilter from '../molecules/UserScoreFilter';
import GenresFilter from '../molecules/GenresFilter';
import ReleaseDateFilter from '../molecules/ReleaseDateFilter';
import FilterButton from '../atoms/FilterButton';

const Filters = ({
  genres,
  selectedGenres,
  selectedYearFrom,
  selectedYearTo,
  selectedScore,
  handleGenreClick,
  setSelectedYearFrom,
  setSelectedYearTo,
  setSelectedScore,
  handleSearch,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const [isFilterSelected, setIsFilterSelected] = useState(false);

  useEffect(() => {
    const hasSelectedFilter =
      selectedGenres.length > 0 ||
      selectedYearFrom !== '' ||
      selectedYearTo !== '' ||
      selectedScore !== '';

    setIsFilterSelected(hasSelectedFilter);
  }, [selectedGenres, selectedYearFrom, selectedYearTo, selectedScore]);

  return (
    <div className='box-border flex h-fit w-full flex-col rounded bg-[#203048] p-4 shadow shadow-slate-600 min-[768px]:max-w-[300px]'>
      <button
        className='mb-4 border-b py-4 text-center font-bold uppercase tracking-widest text-[#38bdf8]'
        onClick={toggleExpanded}
      >
        Filter {isExpanded ? '▲' : '▼'}
      </button>

      {/* <h2 className='mb-4 border-b py-4 text-center font-bold uppercase tracking-widest text-[#38bdf8]'>
        Filters
      </h2> */}

      {isExpanded && (
        <>
          <GenresFilter
            genres={genres}
            selectedGenres={selectedGenres}
            handleGenreClick={(genreId) => {
              handleGenreClick(genreId);
            }}
          />
          <ReleaseDateFilter
            selectedYearFrom={selectedYearFrom}
            selectedYearTo={selectedYearTo}
            setSelectedYearFrom={setSelectedYearFrom}
            setSelectedYearTo={setSelectedYearTo}
          />
          <UserScoreFilter
            selectedScore={selectedScore}
            setSelectedScore={setSelectedScore}
          />
          <FilterButton
            handleSearch={handleSearch}
            disabled={!isFilterSelected}
          />
        </>
      )}
    </div>
  );
};

Filters.propTypes = {
  genres: PropTypes.array.isRequired,
  selectedGenres: PropTypes.array.isRequired,
  selectedYearFrom: PropTypes.string.isRequired,
  selectedYearTo: PropTypes.string.isRequired,
  selectedScore: PropTypes.string.isRequired,
  handleGenreClick: PropTypes.func.isRequired,
  setSelectedYearFrom: PropTypes.func.isRequired,
  setSelectedYearTo: PropTypes.func.isRequired,
  setSelectedScore: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default Filters;
