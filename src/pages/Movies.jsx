import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Pagination, Stack } from '@mui/material';

import MovieList from '../ui/Movie/organisms/MovieList';
import MovieCard from '../ui/Movie/molecules/MovieCard';
import Filters from '../ui/Movie/organisms/Filters';
import { URL, IMAGES_URL } from '../utils/api';

const Movies = () => {
  const { category, genre_id } = useParams();

  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedYearFrom, setSelectedYearFrom] = useState('');
  const [selectedYearTo, setSelectedYearTo] = useState('');
  const [selectedScore, setSelectedScore] = useState('');
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(0);

  const getGenres = async () => {
    const response = await axios.get(
      `${URL}genre/movie/list?api_key=83cb5904bd2f84699c28a99d9d4a0289`
    );
    setGenres(response.data.genres);
  };

  useEffect(() => {
    getGenres();
  }, []);

  const handleGenreClick = (genreId) => {
    if (selectedGenres.includes(genreId)) {
      setSelectedGenres(selectedGenres.filter((id) => id !== genreId));
    } else {
      setSelectedGenres([...selectedGenres, genreId]);
    }
  };

  const handleSearch = async () => {
    setLoading(true);
    const selectedGenresStr = selectedGenres.join(',');
    const response = await axios.get(
      `${URL}discover/movie?api_key=83cb5904bd2f84699c28a99d9d4a0289&with_genres=${
        selectedGenresStr ? selectedGenresStr : ''
      }&primary_release_date.gte=${
        selectedYearFrom ? selectedYearFrom : 2000
      }-01-01&primary_release_date.lte=${
        selectedYearTo ? selectedYearTo : 2023
      }-12-31&vote_average.gte=${
        selectedScore ? selectedScore : ''
      }&sort_by=vote_average.desc&page=${page}`
    );
    setMovies(response.data.results);
    setLoading(false);
    setPageQty(response.data.total_pages);
  };

  return (
    <div className='mt-[150px] max-w-[1280px] mx-auto flex gap-8'>
      <Filters
        genres={genres}
        selectedGenres={selectedGenres}
        selectedYearFrom={selectedYearFrom}
        selectedYearTo={selectedYearTo}
        selectedScore={selectedScore}
        handleGenreClick={handleGenreClick}
        setSelectedYearFrom={setSelectedYearFrom}
        setSelectedYearTo={setSelectedYearTo}
        setSelectedScore={setSelectedScore}
        handleSearch={handleSearch}
      />
      {movies.length === 0 && (
        <div className='text-[#b5cdf5]'>
                   <MovieList
            category={category ? category : 'popular'}
            display='list-grid'
            genreId={genre_id}
          />
        </div>
      )}
      {movies && (
        <>
          <div className='flex flex-col'>
            <Stack spacing={2}>
              {!!pageQty && (
                <Pagination
                  count={pageQty}
                  page={page}
                  onChange={(_, numPage) => (setPage(numPage), handleSearch())}
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
              )}
            </Stack>

            <ul className='flex flex-wrap justify-center gap-4'>
              {movies.map((movie) => (
                <>
                  {movie.poster_path && (
                    <MovieCard
                      key={`${movie.id}-${Math.floor(Math.random() * 10)}`}
                      to={`/movies/${category}/${movie.id}/one`}
                      src={`${IMAGES_URL}${movie.poster_path}`}
                      alt={movie.title}
                      title={movie.title}
                    />
                  )}
                </>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Movies;
