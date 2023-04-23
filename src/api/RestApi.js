import axios from 'axios';

import { URL, API_KEY } from '../utils/api';

class RestApi {
  constructor(baseURL) {
    this.api = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async get(resource) {
    const response = await this.api.get(resource);
    return response.data;
  }
}

const api = new RestApi(URL);

export const getTrendingMovies = async (category, page) => {
  const data = await api.get(`${category}/movie/week${API_KEY}&page=${page}`);
  return data;
};

export const getMoviesByCategories = async (category, page) => {
  const data = await api.get(
    `movie/${category}${API_KEY}&language=en-US&include_image_language=en,jp,uk,null&page=${page}`
  );
  return data;
};

export const getSimilarMovies = async (id, category, page) => {
  const data = await api.get(`movie/${id}/${category}${API_KEY}&page=${page}}`);
  return data;
};

export const getMovieByTitle = async (category, movieTitle, page) => {
  const data = await api.get(
    `${category}/movie${API_KEY}&query=${movieTitle}&page=${page}`
  );
  return data;
};

export const getMoviesByGenre = async (category, genreId, page) => {
  const data = await api.get(
    `${category}/movie${API_KEY}&with_genres=${genreId}&page=${page}`
  );
  return data;
};

export default RestApi;
