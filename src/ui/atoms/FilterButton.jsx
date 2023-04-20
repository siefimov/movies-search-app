import React from 'react';
import PropTypes from 'prop-types';

export const FilterButton = ({ handleSearch, disabled }) => {
  return (
    <button
      onClick={handleSearch}
      className='mt-4 rounded-xl border bg-[#0f172a] px-2 py-1 text-white hover:bg-[#02587d] disabled:hover:bg-[#696969]'
      disabled={disabled}
    >
      Search
    </button>
  );
};

FilterButton.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

