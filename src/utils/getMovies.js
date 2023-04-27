export const getTrendingMovies = async (
  category,
  movieApi,
  setMovies,
  setPageQty,
  page,
  API_KEY
) => {
  const trendingMovies = await movieApi.get(`${category}/movie/week`, {
    params: { api_key: API_KEY, page },
  });
  setPageQty(trendingMovies.total_pages);
  setMovies(trendingMovies.results);
};
