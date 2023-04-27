import axios from 'axios';

import { URL } from '../utils/api';

class RestApi {
  constructor(baseURL, headers = { 'Content-Type': 'application/json' }) {
    this.api = axios.create({
      baseURL,
      headers,
    });
  }

  async get(endpoint, params) {
    try {
      const response = await this.api.get(endpoint, { ...params });
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async post(endpoint, body) {
    try {
      const response = await this.api.post(endpoint, { ...body });
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async put(endpoint, body) {
    try {
      const response = await this.api.put(endpoint, { ...body });
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async delete(endpoint) {
    try {
      const response = await this.api.delete(endpoint);
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
