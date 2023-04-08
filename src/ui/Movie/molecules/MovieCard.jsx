import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { URL, API_KEY } from '../../../utils/api';

const MovieCard = ({ movie, to, src, alt, title }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);

  const handleMouseEnter = async () => {
    setIsHovering(true);

    const response = await axios.get(`${URL}movie/${movie.id}`, {
      params: {
        api_key: API_KEY,
        append_to_response: 'credits',
      },
    });
    setMovieDetails(response.data);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setMovieDetails(null);
  };

  return (
    <Link
      to={to}
      className='movie-card-link'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ transform: isHovering ? 'scale(1.5)' : 'scale(1)' }}
    >
      <img
        src={src}
        alt={alt}
        className='h-auto max-h-[260px] w-full max-w-[172px] rounded-xl'
      />

      {isHovering && (
        <div className='movie-details'>
          <h3>{title}</h3>
          {movieDetails && (
            <>
              <p>Release date: {movieDetails.release_date}</p>
              <p>Overview: {movieDetails.overview}</p>
              <p>Cast:</p>
              <ul>
                {movieDetails.credits.cast.slice(0, 5).map((cast) => (
                  <li key={cast.id}>
                    <img
                      src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`}
                      alt={`${cast.name} profile`}
                    />
                    <div>
                      <p>{cast.name}</p>
                      <p>{cast.character}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}

    </Link>
  );
};

export default MovieCard;
