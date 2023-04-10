import React from 'react';

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
  return (
    <div className='mx-4 box-border flex h-fit max-w-[300px] flex-col rounded bg-[#203048] p-4 shadow shadow-slate-600'>
      <h2 className='mb-4 border-b py-4 text-center font-bold uppercase tracking-widest text-[#38bdf8]'>
        Filters
      </h2>

      <GenresFilter
        genres={genres}
        selectedGenres={selectedGenres}
        handleGenreClick={handleGenreClick}
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
      <FilterButton handleSearch={handleSearch} />
    </div>
  );
};

export default Filters;
