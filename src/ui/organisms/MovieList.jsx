import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as URLS from '../../utils/api';
import MovieCard from '../molecules/MovieCard';

const MovieList = ({ category }) => {
    const [movies, setMovies] = useState([]);

    const getData = async () => {
        const resp = await fetch(
            `${URLS.BASE_URL}movie/${category}${URLS.API_KEY}&language=en-US&include_image_language=en,jp,uk,null`
        );
        const json = await resp.json();
        const result = await json.results;
        setMovies(result);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='py-10 px-10'>
            <div>
                <p className='text-center text-[#b5cdf5] font-bold'>
                    {category}
                </p>
                <ul className='flex snap-x gap-4 overflow-x-scroll overflow-y-hidden relative'>
                    {movies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            to={`/movies/${movie.id}`}
                            src={`${URLS.BASE_IMAGES_URL}${movie.poster_path}`}
                            alt={movie.title}
                            title={movie.title}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

MovieList.propTypes = {};

export default MovieList;

// 'https://api.themoviedb.org/3/movie/top_rated?api_key=83cb5904bd2f84699c28a99d9d4a0289&language=en-US&include_image_language=en,jp,uk,null'
