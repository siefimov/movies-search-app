import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const GoBackButton = ({ goBack }) => {
  return (
    <div className='max-w-[1280px] w-full mx-auto px-5 pb-2'>
      <Link onClick={goBack} className='go-back-btn'>
        &#x2190; Go Back
      </Link>
    </div>
  );
};

GoBackButton.propTypes = {
  goBack: PropTypes.func.isRequired,
};

export default GoBackButton;
