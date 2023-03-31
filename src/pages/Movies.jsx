import React from 'react';
import { useParams } from 'react-router-dom';

import MovieList from '../ui/Movie/organisms/MovieList';

const Movies = () => {
    const { category } = useParams();

    return (
        <div className='text-[#b5cdf5] mt-20'>
            <MovieList
                category={category ? category : 'popular'}
                display='list-grid'
            />
        </div>
    );
};

export default Movies;
