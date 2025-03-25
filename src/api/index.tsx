import axios, { type AxiosRequestConfig } from 'axios';

export const createGetReq = async (url: string, params?: Record<string, any>) => {
  return await axios.get(url, { params });
};

export const createPostJsonReq = async (url: string, data: Record<string, any>, options: AxiosRequestConfig) => {
  return await axios.post(url, data, {
    headers: {
      'Content-Type': 'application/json'
    },
    ...options
  });
};
