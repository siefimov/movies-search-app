import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Hero from '../ui/Hero/organisms/Hero';
import MovieList from '../ui/organisms/MovieList';

import { URL, API_KEY, endpoints } from '../../src/utils/api';

const Home = () => {
    const [originals, setOriginals] = useState([]);

    const handleOriginals = async () => {
        const responseOriginals = await fetch(
            URL + endpoints.originals + API_KEY
        );
        const jsonOriginals = await responseOriginals.json();
        setOriginals(jsonOriginals.results);
        console.log({ jsonOriginals });
    };
    console.log(originals);
    console.log(originals[Math.floor(Math.random() * originals.length)]);
    useEffect(() => {
        handleOriginals();
    }, []);

    return (
        <div className='mt-[83px]'>
            <Hero
                movie={originals[Math.floor(Math.random() * originals.length)]}
            />
            <Link to='user'> Edit User Profile </Link>
            <MovieList category='trending' display='list-scroll' />
            <MovieList category='top_rated' display='list-scroll' />
            <MovieList category='popular' display='list-scroll' />
            <MovieList category='upcoming' display='list-scroll' />
        </div>
    );
};

export default Home;
