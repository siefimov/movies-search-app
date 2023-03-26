import React from 'react';

import MovieList from '../ui/organisms/MovieList';

const Home = () => {
    return (
        <>
            <MovieList category='top_rated' />
        </>
    );
};

export default Home;
