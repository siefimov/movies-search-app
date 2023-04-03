import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import MovieList from '../ui/Movie/organisms/MovieList';
import { URL } from '../utils/api';

const SingleMovie = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);

    const goBack = () => navigate(-1);

    const getMovieData = async () => {
        const resp = await fetch(
            `${URL}movie/${id}?api_key=83cb5904bd2f84699c28a99d9d4a0289&append_to_response=credits,images,videos`
        );
        const json = await resp.json();
        setMovie(json);
    };

    useEffect(() => {
        getMovieData();
    }, [id]);

    return (
        <div className='mt-[83px] flex flex-col justify-center py-10'>
            {movie && (
                <>
                    <div
                        style={
                            {
                                // backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
                            }
                        }
                        className={`relative z-[-1] w-full bg-gradient-to-r from-slate-800 to-blue-900`}
                    >
                        <div className='mx-auto my-8 flex w-full  max-w-6xl items-start gap-12 '>
                            <img
                                src={`https://www.themoviedb.org/t/p/original/${movie.poster_path}`}
                                alt={movie.title}
                                className='w-[300px] rounded-xl '
                            />
                            <div className='flex flex-col gap-3 pr-6 text-slate-100'>
                                <div className='flex flex-wrap items-center'>
                                    <h1 className='mr-3 text-3xl font-bold text-sky-500'>
                                        {movie.title}
                                    </h1>
                                    <div className='text-2xl text-[#b5cdf5]'>
                                        ({movie.release_date.split('-')[0]})
                                    </div>
                                </div>
                                <div className='flex flex-wrap items-center justify-start gap-2'>
                                    <span className='mr-2 rounded border-2 border-slate-500 py-0 px-1 font-semibold text-slate-400'>
                                        R
                                    </span>
                                    <span>{movie.release_date}</span>
                                    &#9900;
                                    <span>
                                        {
                                            movie.genres.map((genre) => (
                                                <span className='mr-2 bg-yellow-600 px-1 text-white'>
                                                    {genre.name}
                                                </span>
                                            ))
                                            // .join(', ')
                                        }
                                    </span>
                                    &#9900;
                                    <span>
                                        {Math.floor(movie.runtime / 60)}h
                                        {movie.runtime % 60}m
                                    </span>
                                </div>
                                <div className='font-bold italic text-slate-400'>
                                    {movie.tagline}
                                </div>

                                <div className='mb-5 flex flex-col'>
                                    <span className='mb-2 text-2xl font-semibold'>
                                        Overview
                                    </span>
                                    {movie.overview}
                                </div>
                                <div className='flex justify-between'>
                                    <div className='flex max-h-[120px] flex-col overflow-hidden'>
                                        <div className='mb-2 text-sm font-bold'>
                                            Cast:
                                        </div>
                                        {movie.credits.cast.map((item) => (
                                            <div
                                                key={item.id + item.name}
                                                className='text-xs'
                                            >
                                                {item.name}
                                            </div>
                                        ))}
                                    </div>
                                    <div className='flex max-h-[120px] flex-col overflow-hidden'>
                                        <div className='mb-2 text-sm font-bold'>
                                            Directors:
                                        </div>
                                        {movie.credits.crew
                                            .filter(
                                                (elem) =>
                                                    elem[
                                                        'known_for_department'
                                                    ] === 'Directing'
                                            )
                                            .map((item) => (
                                                <div
                                                    key={item.id + item.name}
                                                    className='text-xs'
                                                >
                                                    {item.name}
                                                </div>
                                            ))}
                                    </div>
                                    <div className='flex max-h-[120px] flex-col overflow-hidden'>
                                        <div className='mb-2 text-sm font-bold'>
                                            Co-Producers:
                                        </div>
                                        {movie.credits.crew
                                            .filter(
                                                (elem) =>
                                                    elem[
                                                        'known_for_department'
                                                    ] === 'Production'
                                            )
                                            .map((item) => (
                                                <div
                                                    key={item.id + item.name}
                                                    className='text-xs'
                                                >
                                                    {item.name}
                                                </div>
                                            ))}
                                    </div>
                                    <div className='flex max-h-[120px] flex-col overflow-hidden'>
                                        <div className='mb-2 text-sm font-bold'>
                                            Writers:
                                        </div>
                                        {movie.credits.crew
                                            .filter(
                                                (elem) =>
                                                    elem[
                                                        'known_for_department'
                                                    ] === 'Writing'
                                            )
                                            .map((item) => (
                                                <div
                                                    key={item.id + item.name}
                                                    className='text-xs'
                                                >
                                                    {item.name}
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mx-auto mb-12 mt-10 w-full max-w-6xl bg-slate-100'>
                        <h2 className='text-2xl'>You may also like</h2>
                        <MovieList category='similar' display='grid' />
                    </div>
                </>
            )}
            <Link
                onClick={goBack}
                className='mx-auto rounded-xl border py-2 px-8 font-bold text-[#b5cdf5] hover:border-sky-600'
            >
                Go Back
            </Link>
        </div>
    );
};

export default SingleMovie;

// https://api.themoviedb.org/3/movie/603692?api_key=83cb5904bd2f84699c28a99d9d4a0289&language=en-US&append_to_response=credits
// https://api.themoviedb.org/3/movie/1077280?api_key=83cb5904bd2f84699c28a99d9d4a0289&language=en-US&append_to_response=credits
