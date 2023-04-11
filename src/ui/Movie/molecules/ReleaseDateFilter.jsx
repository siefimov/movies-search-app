import React from 'react';
import PropTypes from 'prop-types';

const ReleaseDateFilter = ({
  selectedYearFrom,
  selectedYearTo,
  setSelectedYearFrom,
  setSelectedYearTo,
}) => {
  return (
    <div className='flex flex-col gap-2 border-b border-slate-300 py-4'>
      <h2 className='text-[#b5cdf5]'>Release Dates</h2>
      <div className='flex items-center'>
        <label htmlFor='from-year' className='w-12 text-[16px] text-slate-300'>
          From
        </label>
        <input
          name='from-year'
          className='rounded px-2 py-2 text-sm'
          type='text'
          placeholder='year'
          value={selectedYearFrom}
          onChange={(e) => setSelectedYearFrom(e.target.value)}
        />
      </div>
      <div className='flex items-center'>
        <label htmlFor='to-year' className='w-12 text-[16px] text-slate-300'>
          To
        </label>
        <input
          className='rounded px-2 py-2 text-sm'
          name='to-year'
          type='text'
          placeholder='year'
          value={selectedYearTo}
          onChange={(e) => setSelectedYearTo(e.target.value)}
        />
      </div>
    </div>
  );
};

ReleaseDateFilter.propTypes = {
  selectedYearFrom: PropTypes.number,
  selectedYearTo: PropTypes.number,
  setSelectedYearFrom: PropTypes.func,
  setSelectedYearTo: PropTypes.func,
};

export default ReleaseDateFilter;
