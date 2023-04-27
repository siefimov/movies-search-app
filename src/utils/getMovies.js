export const getTrendingMovies = async ({
  category,
  movieApi,
  setMovies,
  setPageQty,
  page,
  API_KEY,
}) => {
  const trendingMovies = await movieApi.get(`${category}/movie/week`, {
    params: { api_key: API_KEY, page },
  });
  setPageQty(trendingMovies.total_pages);
  setMovies(trendingMovies.results);
};

export const getMoviesByCategories = async ({
  category,
  movieApi,
  setMovies,
  setPageQty,
  page,
  API_KEY,
}) => {
  const moviesByCategory = await movieApi.get(`movie/${category}`, {
    params: {
      api_key: API_KEY,
      page,
    },
  });
  setMovies(moviesByCategory.results);
  setPageQty(moviesByCategory.total_pages);
};

export const getSimilarMovies = async ({
  id,
  category,
  movieApi,
  setMovies,
  setPageQty,
  page,
  API_KEY,
}) => {
  const similarMovies = await movieApi.get(`movie/${id}/${category}`, {
    params: {
      api_key: API_KEY,
      page,
    },
  });
  setMovies(similarMovies.results);
  setPageQty(similarMovies.total_pages);
};

export const getMovieByTitle = async ({
  movieTitle,
  category,
  movieApi,
  setMovies,
  setPageQty,
  page,
  API_KEY,
}) => {
  const moviesByTitle = await movieApi.get(`${category}/movie`, {
    params: {
      api_key: API_KEY,
      query: movieTitle,
      page,
    },
  });
  setMovies(moviesByTitle.results);
  setPageQty(moviesByTitle.total_pages);
};

export const getMovieByGenre = async ({
  category,
  movieApi,
  setMovies,
  setPageQty,
  setMovieGenre,
  page,
  API_KEY,
  genreId,
  genres,
}) => {
  const movieByGenre = await movieApi.get(`${category}/movie`, {
    params: {
      api_key: API_KEY,
      genreId,
      page,
    },
  });

  setMovies(movieByGenre.results);
  setPageQty(movieByGenre.total_pages);

  const currentMovieGenres = genres.filter((genre) => genre.id === +genreId);
  setMovieGenre(currentMovieGenres[0].name);
};
