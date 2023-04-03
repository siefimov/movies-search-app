import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filters from './Filters';
import MovieCard from '../Movie/molecules/MovieCard';
import { URL, IMAGES_URL } from '../../utils/api';

const FilterResults = () => {
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [selectedYearFrom, setSelectedYearFrom] = useState('');
    const [selectedYearTo, setSelectedYearTo] = useState('');
    const [selectedScore, setSelectedScore] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${URL}movie/popular`, {
                    params: {
                        api_key: '83cb5904bd2f84699c28a99d9d4a0289',
                        sort_by: 'popularity.desc',
                        include_adult: false,
                        include_video: false,
                    },
                });
                setMovies(response.data.results);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${URL}/genre/movie/list`, {
                    params: {
                        api_key: '83cb5904bd2f84699c28a99d9d4a0289',
                    },
                });
                setGenres(response.data.genres);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const handleGenreClick = (genreId) => {
        if (selectedGenres.includes(genreId)) {
            setSelectedGenres(selectedGenres.filter((id) => id !== genreId));
        } else {
            setSelectedGenres([...selectedGenres, genreId]);
        }
    };

    const handleYearFromChange = (year) => {
        setSelectedYearFrom(year);
    };

    const handleYearToChange = (year) => {
        setSelectedYearTo(year);
    };

    const handleScoreChange = (score) => {
        setSelectedScore(score);
    };

    const handleSearch = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
              `${URL}discover/movie`, 
              {
                params: {
                    api_key: '83cb5904bd2f84699c28a99d9d4a0289',
                    sort_by: 'popularity.desc',
                    include_adult: false,
                    include_video: false,
                    with_genres: selectedGenres.join(','),
                    'release_date.gte': selectedYearFrom,
                    'release_date.lte': selectedYearTo,
                    'vote_average.gte': selectedScore,
                },
            });
            setMovies(response.data.results);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='movies mt-[150px] flex gap-8'>
            <Filters
                genres={genres}
                selectedGenres={selectedGenres}
                selectedYearFrom={selectedYearFrom}
                selectedYearTo={selectedYearTo}
                selectedScore={selectedScore}
                onGenreClick={handleGenreClick}
                onYearFromChange={handleYearFromChange}
                onYearToChange={handleYearToChange}
                onScoreChange={handleScoreChange}
                onSearch={handleSearch}
            />

            <div>
                {loading ? (
                    <p className='text-rose-600'>Loading...</p>
                ) : (
                    <div className='flex flex-wrap gap-4'>
                        {movies.map((movie) => (
                            <>
                                <MovieCard
                                    key={`${movie.id}-${Math.floor(
                                        Math.random() * 10
                                    )}`}
                                    // to={`/movies/${movie.id}`}
                                    to={`/movies/discover/${movie.id}/one`}
                                    src={`${IMAGES_URL}${movie.poster_path}`}
                                    alt={movie.title}
                                    title={movie.title}
                                />
                            </>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FilterResults;
