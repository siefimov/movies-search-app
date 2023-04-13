import React from 'react'
import PropTypes from 'prop-types'

const Producers = ({movie}) => {
  return (
    <div className='flex max-h-[120px] flex-col overflow-hidden'>
        <div className='mb-2 text-sm font-bold'>Co-Producers:</div>
        {movie.credits.crew
          .filter((elem) => elem['known_for_department'] === 'Production')
          .map((item) => (
            <div
              key={item.id + Math.random()}
              className='text-xs text-slate-400'
            >
              {item.name}
            </div>
          ))}
      </div>
  )
}

Producers.propTypes = {
  movie: PropTypes.object.isRequired,
}

export default Producers