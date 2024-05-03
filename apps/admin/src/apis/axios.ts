import axios from "axios";

export const instance = axios.create({
  baseURL: import.meta.env.NEXT_PUBLIC_BASE_URL,
  timeout: 10_000,
});
