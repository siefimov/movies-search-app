import React from 'react';
import PropTypes from 'prop-types';

const UserScoreFilter = ({ selectedScore, setSelectedScore }) => {
  return (
    <div className='py-4'>
      <h2 className='mb-2 text-[#b5cdf5]'>User Score</h2>
      <input
        className='rounded px-2 py-2 text-sm'
        type='text'
        placeholder='Score'
        value={selectedScore}
        onChange={(e) => setSelectedScore(e.target.value)}
      />
    </div>
  );
};

UserScoreFilter.propTypes = {
  selectedScore: PropTypes.string,
  setSelectedScore: PropTypes.func,
};

export default UserScoreFilter;
