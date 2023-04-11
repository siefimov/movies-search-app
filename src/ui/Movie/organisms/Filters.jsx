// import React, { useState } from 'react';

// import UserScoreFilter from '../molecules/UserScoreFilter';
// import GenresFilter from '../molecules/GenresFilter';
// import ReleaseDateFilter from '../molecules/ReleaseDateFilter';
// import FilterButton from '../atoms/FilterButton';

// const Filters = ({
//   genres,
//   selectedGenres,
//   selectedYearFrom,
//   selectedYearTo,
//   selectedScore,
//   handleGenreClick,
//   setSelectedYearFrom,
//   setSelectedYearTo,
//   setSelectedScore,
//   handleSearch,
// }) => {
//   const [isFilterSelected, setIsFilterSelected] = useState(false);

//   const handleFilterSelected = (isSelected) => {
//     setIsFilterSelected(isSelected);
//   };
//   console.log(isFilterSelected);
//   return (
//     <div className='mx-4 box-border flex h-fit max-w-[300px] flex-col rounded bg-[#203048] p-4 shadow shadow-slate-600'>
//       <h2 className='mb-4 border-b py-4 text-center font-bold uppercase tracking-widest text-[#38bdf8]'>
//         Filters
//       </h2>

//       <GenresFilter
//         genres={genres}
//         selectedGenres={selectedGenres}
//         handleGenreClick={(genreId) => {
//           handleGenreClick(genreId);
//           handleFilterSelected(true);
//         }}
//       />
//       <ReleaseDateFilter
//         selectedYearFrom={selectedYearFrom}
//         selectedYearTo={selectedYearTo}
//         setSelectedYearFrom={(year) => {
//           handleFilterSelected(true);
//           setSelectedYearFrom(year);
//         }}
//         setSelectedYearTo={(year) => {
//           handleFilterSelected(true);
//           setSelectedYearTo(year);
//         }}
//       />
//       <UserScoreFilter
//         selectedScore={selectedScore}
//         setSelectedScore={(score) => {
//           handleFilterSelected(true);
//           setSelectedScore(score);
//         }}
//       />
//       <FilterButton handleSearch={handleSearch} disabled={!isFilterSelected} />
//     </div>
//   );
// };

import React, { useState, useEffect } from 'react';

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
  const [isFilterSelected, setIsFilterSelected] = useState(false);

  useEffect(() => {
    const hasSelectedFilter =
      selectedGenres.length > 0 ||
      selectedYearFrom !== '' ||
      selectedYearTo !== '' ||
      selectedScore !== '';

    setIsFilterSelected(hasSelectedFilter);
  }, [selectedGenres, selectedYearFrom, selectedYearTo, selectedScore]);

  console.log(isFilterSelected);

  return (
    <div className='mx-4 box-border flex h-fit max-w-[300px] flex-col rounded bg-[#203048] p-4 shadow shadow-slate-600'>
      <h2 className='mb-4 border-b py-4 text-center font-bold uppercase tracking-widest text-[#38bdf8]'>
        Filters
      </h2>

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
      <FilterButton handleSearch={handleSearch} disabled={!isFilterSelected} />
    </div>
  );
};

export default Filters;
