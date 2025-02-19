import axios from "axios";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const fetcher = (url: string) =>
  axiosInstance.get(url).then((res) => res.data);
