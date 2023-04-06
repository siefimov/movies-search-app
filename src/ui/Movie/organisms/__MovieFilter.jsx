import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MovieCard from '../molecules/MovieCard';
import { URL, IMAGES_URL } from '../../../utils/api';

const MoviesFilter = () => {
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [selectedYearFrom, setSelectedYearFrom] = useState('');
    const [selectedYearTo, setSelectedYearTo] = useState('');
    const [selectedScore, setSelectedScore] = useState('');
    const [loading, setLoading] = useState(false);

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
            }&sort_by=vote_average.desc`
        );
        setMovies(response.data.results);
        setLoading(false);
    };

    return (
        <div className='mt-[200px] flex gap-8'>
            <div className='mx-4 box-border flex max-w-[300px] flex-col rounded bg-[#203048] p-4 shadow shadow-slate-600'>
                <h2 className='py-4 text-center font-bold uppercase tracking-widest text-[#38bdf8]'>
                    Filters
                </h2>
                <div className='border-b border-slate-300 pb-4'>
                    <h2 className='mb-3 text-[#b5cdf5]'>Genres</h2>
                    <div className='text-white'>
                        {genres.map((genre) => (
                            <button
                                key={genre.id}
                                onClick={() => handleGenreClick(genre.id)}
                                className={`${
                                    selectedGenres.includes(genre.id)
                                        ? 'active-genre'
                                        : undefined
                                } mr-2 mb-1 rounded-2xl border px-2 hover:bg-slate-500`}
                            >
                                {genre.name}
                            </button>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col gap-2 border-b border-slate-300 py-4'>
                    <h2 className='text-[#b5cdf5]'>Release Dates</h2>
                    <div className='flex'>
                        <label
                            htmlFor='from-year'
                            className='w-12 text-[12px] text-slate-300'
                        >
                            from
                        </label>
                        <input
                            name='from-year'
                            className='rounded px-2'
                            type='text'
                            placeholder='From year'
                            value={selectedYearFrom}
                            onChange={(e) =>
                                setSelectedYearFrom(e.target.value)
                            }
                        />
                    </div>
                    <div className='flex'>
                        <label
                            htmlFor='to-year'
                            className='w-12 text-[12px] text-slate-300'
                        >
                            to
                        </label>
                        <input
                            className='rounded px-2'
                            name='to-year'
                            type='text'
                            placeholder='To year'
                            value={selectedYearTo}
                            onChange={(e) => setSelectedYearTo(e.target.value)}
                        />
                    </div>
                </div>
                <div className='py-4'>
                    <h2 className='mb-2 text-[#b5cdf5]'>User Score</h2>
                    <input
                        className='rounded px-2'
                        type='text'
                        placeholder='Score'
                        value={selectedScore}
                        onChange={(e) => setSelectedScore(e.target.value)}
                    />
                </div>
                <button
                    onClick={handleSearch}
                    className='mt-4 rounded-xl border px-2 py-1 text-white hover:bg-[#0f172a]'
                >
                    Search
                </button>
            </div>
            <div>
                {loading ? (
                    <p className='text-rose-600'>Loading...</p>
                ) : (
                    <div className='flex flex-wrap'>
                        {movies.map((movie) => (
                            // <div key={movie.id} className='text-white max-w-[200px]'>

                            //     <img
                            //         src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            //         alt={movie.title}
                            //         className='w-[140px] h'
                            //     />
                            //     <h3 className='text-3xl'>{movie.title}</h3>
                            //     <p>Rating: {movie.vote_average}</p>
                            //     <p>Release date: {movie.release_date}</p>
                            //     <p>Genres: {movie.genre_ids.join(', ')}</p>
                            // </div>
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

export default MoviesFilter;
