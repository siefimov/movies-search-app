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

  async get(resource, options = {}) {
    const { category, page, id, genreId, movieTitle } = options;
    let url;
    switch (resource) {
      case 'trending':
        url = `${category}/movie/week${API_KEY}&page=${page}`;
        break;
      case 'top_rated':
      case 'popular':
      case 'upcoming':
        url = `movie/${category}${API_KEY}&language=en-US&include_image_language=en,jp,uk,null&page=${page}`;
        break;
      case 'similar':
        url = `movie/${id}/${category}${API_KEY}&page=${page}}`;
        break;
      case 'search':
        url = `${category}/movie${API_KEY}&query=${movieTitle}&page=${page}`;
        break;
      case '':
        url = `${category}/movie${API_KEY}&with_genres=${genreId}&page=${page}`;
        break;

      default:
        throw new Error(`Unknown resource: ${resource}`);
    }
    const response = await this.api.get(url);
    return response.data;
  }
}

export const api = new RestApi(URL);
