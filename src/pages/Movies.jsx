import React from 'react';
import { useParams } from 'react-router-dom';

import MovieList from '../ui/Movie/organisms/MovieList';
// import { genres } from '../utils/db_categories';

const Movies = () => {
    const { category, genre_id } = useParams();
    // const [genre, setGenre] = useState(null);

    // const handleGenre = () => {
    //     const genre = document.querySelector('.movie-genre').innerHTML;
    //     console.log(genre);
    //     const currentGenre = genres.filter(
    //         (element) => element.name === genre
    //     ).name;
    //     setGenre(currentGenre);
    // };

    // useEffect(() => {
    //     handleGenre();
    // }, []);

    // console.log(genre);

    return (
        <div className='mt-20 text-[#b5cdf5]'>
            <MovieList
                category={category ? category : 'popular'}
                display='list-grid'
                genreId={genre_id}
            />
        </div>
    );
};

export default Movies;
