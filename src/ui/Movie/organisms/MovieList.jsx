import React, { useState, useEffect } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import { URL, API_KEY, IMAGES_URL } from '../../../utils/api';
import MovieCard from '../molecules/MovieCard';
// import MovieCard from '../molecules/MovieCard';

import { movieCategories, genres } from '../../../utils/db_categories';

// https://api.themoviedb.org/3/movie/latest?api_key=83cb5904bd2f84699c28a99d9d4a0289&language=en-US

// *************
// * COMPONENT *
// *************
const MovieList = ({ category, display, genreId, ...props }) => {
    const { id } = useParams();
    const [movies, setMovies] = useState([]);
    const [isShown, setIsShown] = useState(false);
    const [arrowVisibility, setArrowVisibility] = useState(false);
    const [movieGenre, setMovieGenre] = useState('');

    const getData = async () => {
        if (category === 'trending') {
            const resp = await fetch(`${URL}${category}/movie/week${API_KEY}`);
            const json = await resp.json();
            const result = await json.results;
            setMovies(result);
        } else if (
            category === 'popular' ||
            category === 'top_rated' ||
            category === 'upcoming'
        ) {
            const resp = await fetch(
                `${URL}movie/${category}${API_KEY}&language=en-US&include_image_language=en,jp,uk,null`
            );
            const json = await resp.json();
            const result = await json.results;
            setMovies(result);
        } else if (category === 'similar') {
            const resp = await fetch(`${URL}movie/${id}/${category}${API_KEY}`);
            const json = await resp.json();
            const result = await json.results;
            setMovies(result);
        } else {
            const resp = await fetch(
                `${URL}${category}/movie${API_KEY}&with_genres=${genreId}`
            );
            const json = await resp.json();
            const result = await json.results;
            setMovies(result);

            const currentMovieGenre = genres.filter(
                (genre) => genre.id === +genreId
            );
            setMovieGenre(currentMovieGenre[0].name);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='py-10 px-10'>
            <div>
                <div
                    className='inline-flex items-center'
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                >
                    <p className=' cursor-pointer py-4 text-2xl font-bold text-[#b5cdf5]'>
                        {movieCategories[category] || movieGenre}
                    </p>
                    <Link
                        to={`movies/${category}`}
                        className='flex items-center self-center'
                    >
                        {isShown && (
                            <p className='pl-4 font-bold text-[#b5cdf5] hover:text-[#38bdf8] '>
                                see all movies
                            </p>
                        )}

                        <FiArrowRight className='text-xl font-bold text-[#38bdf8]' />
                    </Link>
                </div>
                <ul className={display}>
                    {movies.map((movie) => (
                        <>
                            <MovieCard
                                key={`${movie.id}-${Math.floor(
                                    Math.random() * 10
                                )}`}
                                to={`/movies/${category}/${movie.id}`}
                                src={`${IMAGES_URL}${movie.poster_path}`}
                                alt={movie.title}
                                title={movie.title}
                            />
                        </>
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
