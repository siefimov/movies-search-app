import React from 'react';
import PropTypes from 'prop-types';

const FilterButton = ({ handleSearch }) => {
  return (
    <button
      onClick={handleSearch}
      className='mt-4 rounded-xl border bg-[#0f172a] px-2 py-1 text-white hover:bg-[#02587d]'
    >
      Search
    </button>
  );
};

FilterButton.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default FilterButton;
