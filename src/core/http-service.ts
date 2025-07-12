import axios, {
  AxiosProgressEvent,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from "axios";

import { NetworkErrorStrategy, errorHandler } from "./http-error.strategies";

import { API_URL } from "@/configs/global";
import { ApiError } from "@/types/http-errors.interface";

const httpService = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

/* httpService.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
); */

httpService.interceptors.response.use(
  (res) => res,

  (error) => {
    if (error?.response) {
      const statusCode = error?.response?.status;
      if (statusCode >= 400) {
        const errorData: ApiError = error.response?.data;

        errorHandler[statusCode](errorData);
      }
    } else {
      NetworkErrorStrategy();
    }
  },
);

async function apiBase<T>(
  url: string,
  options?: AxiosRequestConfig,
): Promise<T> {
  const response: AxiosResponse = await httpService(url, options);
  return response as T;
}

async function readData<T>(
  url: string,
  headers?: AxiosRequestHeaders,
): Promise<T> {
  const options: AxiosRequestConfig = {
    headers,
    method: "GET",
  };
  return await apiBase<T>(url, options);
}

async function createData<TModel, TResult>(
  url: string,
  data: TModel,
  headers?: AxiosRequestHeaders,
): Promise<TResult> {
  const options: AxiosRequestConfig = {
    method: "POST",
    headers,
    data,
  };
  return await apiBase<TResult>(url, options);
}

async function UploadFileData<TModel, TResult>(
  url: string,
  data: TModel,
  onUploadProgress?: (progressEvent: AxiosProgressEvent) => void,
  headers?: AxiosRequestHeaders,
): Promise<TResult> {
  const options: AxiosRequestConfig = {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "multipart/form-data",
    },
    data,
    onUploadProgress,
  };
  return await apiBase<TResult>(url, options);
}

async function updateData<TModel, TResult>(
  url: string,
  method: "PUT" | "PATCH",
  data?: TModel,
  headers?: AxiosRequestHeaders,
): Promise<TResult> {
  const options: AxiosRequestConfig = {
    method,
    headers,
    data,
  };
  return await apiBase<TResult>(url, options);
}

async function deleteData(
  url: string,
  headers?: AxiosRequestHeaders,
): Promise<void> {
  const options: AxiosRequestConfig = {
    method: "DELETE",
    headers,
  };
  return await apiBase(url, options);
}

export { createData, updateData, readData, deleteData, UploadFileData };
