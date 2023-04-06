import React from 'react'
import PropTypes from 'prop-types'

const Directors = ({movie}) => {
  return (
     <div className='flex max-h-[120px] flex-col overflow-hidden'>
        <div className='mb-2 text-sm font-bold'>Directors:</div>
        {movie.credits.crew
          .filter((elem) => elem['known_for_department'] === 'Directing')
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

Directors.propTypes = {
  movie: PropTypes.object.isRequired,
}

export default Directors