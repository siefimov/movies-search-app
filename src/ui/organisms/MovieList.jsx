import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as URLS from '../../utils/api';

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
            <h1 className='p-5 text-center text-5xl mb-10 text-sky-700'>
                Here we have a different lists of the movies
            </h1>
            <p className='text-center font-bold'>Top Rated</p>
            {movies.map((movie) => (
                <Link key={movie.id} to={`/movies/${movie.id}`}>
                    <li className='list-none gap-5 my-5 flex  hover:bg-sky-100'>
                        <h2 className='font-bold w-[150px]'>{movie.title}</h2>
                        <img
                            src={`https://www.themoviedb.org/t/p/original/${movie.poster_path}`}
                            alt={movie.title}
                            className='w-[200px]'
                        />
                    </li>
                </Link>
            ))}
        </div>
    );
};

MovieList.propTypes = {};

export default MovieList;

// 'https://api.themoviedb.org/3/movie/top_rated?api_key=83cb5904bd2f84699c28a99d9d4a0289&language=en-US&include_image_language=en,jp,uk,null'
