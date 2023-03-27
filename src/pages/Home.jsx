import React from 'react';
import { Link } from 'react-router-dom';

import MovieList from '../ui/organisms/MovieList';

const Home = () => {
    return (
        <>
        <h1 className='p-5 text-center text-5xl mb-10 text-sky-700'>
                Here we have a different lists of the movies
            </h1>
            <Link to='user'> Edit User Profile </Link>
            <MovieList category='top_rated' />
            <MovieList category='popular' />
            <MovieList category='upcoming' />
        </>
    );
};

export default Home;
