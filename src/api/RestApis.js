import axios from 'axios';

import { URL } from '../utils/api';

class RestApi {
  constructor(baseURL, headers = { 'Content-Type': 'application/json' }) {
    this.api = axios.create({
      baseURL,
      headers,
    });
  }

  async get(url, params) {
    try {
      const response = await this.api.get(url, { ...params });
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async post(url, body) {
    try {
      const response = await this.api.post(url, { ...body });
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async put(url, body) {
    try {
      const response = await this.api.put(url, { ...body });
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async delete(url) {
    try {
      const response = await this.api.delete(url);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  handleError(error) {
    if (error.response) {
      throw new Error(
        `Request failed with status code ${error.response.status}`
      );
    } else if (error.request) {
      throw new Error('Request failed, no response received from server');
    } else {
      throw new Error(`Request failed with error ${error.message}`);
    }
  }
}

export const movieApi = new RestApi(URL);
