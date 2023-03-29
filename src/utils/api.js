export const URL = 'https://api.themoviedb.org/3/';
export const API_KEY = '?api_key=83cb5904bd2f84699c28a99d9d4a0289';
// export const BASE_IMAGES_URL = 'https://www.themoviedb.org/t/p/original/';
export const IMAGES_URL = 'https://image.tmdb.org/t/p/w300';

export const endpoints = {
    originals: 'discover/tv',
    trending: '/trending/all/week',
    latest: '/movie/latest',
    now_playing: '/movie/now_playing',
    popular: '/movie/popular',
    top_rated: '/movie/top_rated',
    upcoming: '/movie/upcoming',
};

// "https://api.themoviedb.org/3/movie/top_rated?api_key=83cb5904bd2f84699c28a99d9d4a0289&language=en-US&include_image_language=en,jp,uk,null"

// `https://www.themoviedb.org/t/p/original/${movie.poster_path}`
// https://github.com/markshenouda/Netflix-Tailwind-Styled-Components/blob/master/src/components/Hero.styles.js

// *** search by genre ***
// https://api.themoviedb.org/27/movie/horror
// Or else:
// https://api.themoviedb.org/3/discover/movie?api_key=XXXXX&with_genres=27
