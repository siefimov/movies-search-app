import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, text }) => {
    return (
        <>
            <button type={type} className='rounded-3xl border px-8 py-2'>
                {text}
            </button>
        </>
    );
};

Button.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default Button;
