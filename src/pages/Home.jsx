import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Hero from '../ui/Hero/organisms/Hero';
import MovieList from '../ui/Movie/organisms/MovieList';

import { URL, API_KEY, endpoints } from '../../src/utils/api';

const Home = () => {
    const [trending, setTrending] = useState([]);

    const handleTrendings = async () => {
        const responseTrending = await fetch(
            URL + endpoints.trending + API_KEY
        );
        const jsonTrending = await responseTrending.json();
        setTrending(jsonTrending.results);
    };

    useEffect(() => {
        handleTrendings();
    }, []);

    return (
        <div className=''>
            <Hero
                movie={trending[Math.floor(Math.random() * trending.length)]}
            />
            <Link to='user'> Edit User Profile </Link>
            <MovieList category='trending' display='list-scroll' />
            <MovieList category='discover' display='list-scroll' genreId='35' />
            <MovieList category='discover' display='list-scroll' genreId='18' />
            <MovieList category='discover' display='list-scroll' genreId='28' />
            <MovieList category='discover' display='list-scroll' genreId='14' />
            <MovieList category='discover' display='list-scroll' genreId='53' />
        </div>
    );
};

export default Home;
