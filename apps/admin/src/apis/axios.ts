import axios from "axios";

const apiVersion = "/api/v1";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL + apiVersion,
  timeout: 10_000,
});
