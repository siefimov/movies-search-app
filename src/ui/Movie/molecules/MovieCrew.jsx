import React from 'react';
import PropTypes from 'prop-types';

import Directors from '../atoms/Directors';
import Producers from '../atoms/Producers';
import Writers from '../atoms/Writers';

const MovieCrew = ({ movie }) => {
  return (
    <div className='flex flex-wrap justify-start gap-5'>
      <Directors movie={movie} />
      <Producers movie={movie} />
      <Writers movie={movie} />
    </div>
  );
};

MovieCrew.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCrew;
