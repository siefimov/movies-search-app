export const URL = 'https://api.themoviedb.org/3/';
export const API_KEY = '?api_key=83cb5904bd2f84699c28a99d9d4a0289';
export const IMAGES_URL = 'https://image.tmdb.org/t/p/w300';

export const endpoints = {
  trending: '/trending/all/week',
  now_playing: '/movie/now_playing',
  popular: '/movie/popular',
  top_rated: '/movie/top_rated',
  upcoming: '/movie/upcoming',
  originals: 'discover/tv',
  latest: '/movie/latest',
};

// "https://api.themoviedb.org/3/movie/top_rated?api_key=83cb5904bd2f84699c28a99d9d4a0289&language=en-US&include_image_language=en,jp,uk,null"

// `https://www.themoviedb.org/t/p/original/${movie.poster_path}`
// https://github.com/markshenouda/Netflix-Tailwind-Styled-Components/blob/master/src/components/Hero.styles.js

// *** search by genre ***
// https://api.themoviedb.org/3/discover/movie?api_key=XXXXX&with_genres=27

// * search by title
// https://api.themoviedb.org/3/search/movie?api_key=83cb5904bd2f84699c28a99d9d4a0289&query=the+avengers