import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const SingleMovie = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);

    const goBack = () => navigate(-1);

    const getMovieData = async () => {
        const resp = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=83cb5904bd2f84699c28a99d9d4a0289&language=en-US&include_image_language=en,jp,null/`
        );
        const json = await resp.json();
        setMovie(json);
    };

    useEffect(() => {
        getMovieData();
    }, []);

    return (
        <div className='py-10 pl-10 flex flex-col justify-center'>
            {movie && (
                <div className='flex gap-6 max-w-6xl w-full mx-auto bg-sky-50 mb-20'>
                    <img
                        src={`https://www.themoviedb.org/t/p/original/${movie.poster_path}`}
                        alt={movie.title}
                        className='w-[200px]'
                    />
                    <div className='flex flex-col gap-3'>
                        <p className='font-bold'>id: {movie.id}</p>
                        <h1 className='font-bold text-2xl text-sky-800'>
                            {movie.title}
                        </h1>
                        <p>
                            <span className='font-semibold'>release data:</span>{' '}
                            {movie.release_date}
                        </p>
                        <p>
                            <span className='font-semibold'>popularity:</span>{' '}
                            {movie.popularity}
                        </p>
                        <p>
                            <span className='font-semibold'>
                                original language:
                            </span>{' '}
                            {movie.original_language}
                        </p>
                        <p>
                            <span className='font-semibold'>overview:</span>{' '}
                            {movie.overview}
                        </p>
                    </div>
                </div>
            )}
            <Link
                // to={`/movies`}
                onClick={goBack}
                className='border font-bold py-4 px-8 mx-auto hover:border-sky-600 rounded'
            >
                Go Back
            </Link>
            
        </div>
    );
};

export default SingleMovie;
