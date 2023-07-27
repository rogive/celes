import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: "https://celes-app.myshopify.com/admin/api/2023-04/products.json",
  headers: {
    "X-Shopify-Access-Token": "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",
  },
});

type HTTPRequestConfig = AxiosRequestConfig;

const api = (axios: AxiosInstance) => {
  return {
    get: <T>(url: string, config: HTTPRequestConfig = {}) => {
      return axios.get<T>(url, config);
    },
    delete: <T>(url: string, config: HTTPRequestConfig = {}) => {
      return axios.delete<T>(url, config);
    },
    put: <T>(url: string, body: unknown, config: HTTPRequestConfig = {}) => {
      return axios.put<T>(url, body, config);
    },
    patch: <T>(url: string, body: unknown, config: HTTPRequestConfig = {}) => {
      return axios.patch<T>(url, body, config);
    },
    post: <T>(url: string, body: unknown, config: HTTPRequestConfig = {}) => {
      return axios.post<T>(url, body, config);
    },
  };
};

export const Http = api(instance);