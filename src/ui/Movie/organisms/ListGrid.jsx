import React from 'react';
import { Pagination, Stack } from '@mui/material';
import PropTypes from 'prop-types';

import MovieCard from '../molecules/MovieCard';
import { IMAGES_URL } from '../../../utils/api';

const ListGrid = ({ display, pageQty, page, movies, category, setPage }) => {
  return (
    <>
      {display === 'list-grid' && (
        <>
          <Stack spacing={2}>
            <Pagination
              count={pageQty}
              page={page}
              onChange={(_, numPage) => setPage(numPage)}
              color='primary'
              variant='outlined'
              sx={{
                button: { color: '#ffffff' },
                ul: {
                  justifyContent: 'center',
                  marginBottom: '20px',
                },
              }}
            />
          </Stack>

          <ul className={display}>
            {movies.map((movie) => (
              <>
                {movie.poster_path && (
                  <MovieCard
                    movie={movie}
                    key={`${movie.id} * ${Math.floor(Math.random() * 10)}`}
                    to={`/movies/${category}/${movie.id}/one`}
                    src={`${IMAGES_URL}${movie.poster_path}`}
                    alt={movie.title}
                    title={movie.title}
                  />
                )}
              </>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

ListGrid.propTypes = {
  display: PropTypes.string.isRequired,
  pageQty: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  movies: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default ListGrid;
