import axios, { AxiosInstance } from 'axios';

import { Env } from '../../../config/env';
import * as types from './api.types';

export const api: AxiosInstance = axios.create({
  baseURL: Env.apiUrl,
});

export const getUser = async (userId: number): Promise<types.GetUserResult> => {
  const response: any = await api.get(`users/${userId}`);

  return {
    id: response.id,
    name: response.name,
    username: response.username,
  };
};
