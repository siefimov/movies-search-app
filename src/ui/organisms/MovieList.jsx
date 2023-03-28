import React, { useState, useEffect } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as URLS from '../../utils/api';
import MovieCard from '../molecules/MovieCard';
import { movieCategories } from '../../utils/db_categories';

// https://api.themoviedb.org/3/movie/latest?api_key=83cb5904bd2f84699c28a99d9d4a0289&language=en-US

// *************
// * COMPONENT *
// *************
const MovieList = ({ category, display, ...props }) => {
    const [movies, setMovies] = useState([]);
    const [isShown, setIsShown] = useState(false);

    const getData = async () => {
        if (category === 'trending') {
            const resp = await fetch(
                `${URLS.URL}${category}/movie/week${URLS.API_KEY}`
            );
            const json = await resp.json();
            const result = await json.results;
            setMovies(result);
        } else {
            const resp = await fetch(
                `${URLS.URL}movie/${category}${URLS.API_KEY}&language=en-US&include_image_language=en,jp,uk,null`
            );
            const json = await resp.json();
            const result = await json.results;
            setMovies(result);
        }

        // const json = await resp.json();
        // const result = await json.results;
        // setMovies(result);
    };

    useEffect(() => {
        getData();
    }, []);

    // const handleIsShown = () => {
    //     setIsShown();
    // };

    return (
        <div className='py-10 px-10'>
            <div>
                <div
                    className='inline-flex items-center'
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                >
                    <p className=' text-2xl text-[#b5cdf5] font-bold py-4 cursor-pointer'>
                        {movieCategories[category]}
                    </p>
                    <Link
                        to={`movies/${category}`}
                        className='flex items-center self-center'
                    >
                        {isShown && (
                            <p className='text-[#b5cdf5] hover:text-[#38bdf8] font-bold pl-4 '>
                                see all movies
                            </p>
                        )}
                        <FiArrowRight className='text-[#38bdf8] font-bold text-xl' />
                    </Link>
                </div>
                <ul className={display}>
                    {movies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            to={`/movies/${category}/${movie.id}`}
                            src={`${URLS.IMAGES_URL}${movie.poster_path}`}
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
// <ul className='flex gap-4 overflow-x-scroll overflow-y-hidden relative' style={{grid}}>
