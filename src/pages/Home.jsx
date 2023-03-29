import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Hero from '../ui/Hero/organisms/Hero';
import MovieList from '../ui/organisms/MovieList';

import { URL, API_KEY, endpoints } from '../../src/utils/api';

const Home = () => {
    const [trending, setTrending] = useState([]);

    const handleOriginals = async () => {
        const responseTrending = await fetch(
            URL + endpoints.trending + API_KEY
        );
        const jsonTrending = await responseTrending.json();
        setTrending(jsonTrending.results);
    };

    useEffect(() => {
        handleOriginals();
    }, []);

    return (
        <div className=''>
            <Hero
                movie={trending[Math.floor(Math.random() * trending.length)]}
            />
            <Link to='user'> Edit User Profile </Link>
            <MovieList category='trending' display='list-scroll' />
            <MovieList category='discover' genreId='28' display='list-scroll' />
            <MovieList category='discover' genreId='35' display='list-scroll' />
            <MovieList category='discover' genreId='18' display='list-scroll' />
            <MovieList category='discover' genreId='14' display='list-scroll' />
            <MovieList category='discover' genreId='53' display='list-scroll' />
            {/* <MovieList category='top_rated' display='list-scroll' />
            <MovieList category='popular' display='list-scroll' />
            <MovieList category='upcoming' display='list-scroll' /> */}
        </div>
    );
};

export default Home;
