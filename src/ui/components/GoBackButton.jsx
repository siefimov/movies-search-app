import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const GoBackButton = ({ goBack }) => {
  return (
    <Link onClick={goBack} className='go-back-btn'>
      Go Back
    </Link>
  );
};

GoBackButton.propTypes = {
  goBack: PropTypes.func.isRequired
};

export default GoBackButton;
