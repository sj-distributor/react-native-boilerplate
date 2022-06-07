import axios, { AxiosInstance } from 'axios';
import { LogBox } from 'react-native';

import { Env } from '../../../config/env';
import { requestLogger, responseLogger } from '../../utils/axios-logger';
import * as types from './api.types';

// 0.63之后 关闭全部黄色警告
LogBox.ignoreAllLogs(true);

export const api: AxiosInstance = axios.create({
  baseURL: Env.apiUrl,
});

// API Logger
if (Env.debugLog) {
  api.interceptors.request.use(requestLogger);
  api.interceptors.response.use(responseLogger);
}

api.interceptors.response.use(
  response => response.data,
  error => {
    return Promise.reject(error);
  },
);

export const getUserApi = async (
  userId: number,
): Promise<types.GetUserResult> => {
  const response: any = await api.get(`users/${userId}`);

  return {
    id: response.id,
    name: response.name,
    username: response.username,
  };
};
