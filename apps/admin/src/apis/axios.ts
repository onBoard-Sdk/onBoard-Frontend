import axios, { AxiosError } from "axios";
import { customCookie } from "@/utils/customCookies";
import { userReissueToken } from "./auth/userReissueToken";

export const apiVersion = "/api/v1";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL + apiVersion,
  timeout: 10_000,
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = customCookie.get.accessToken();
    const returnConfig = { ...config };
    if (accessToken) {
      returnConfig.headers!.Authorization = `Bearer ${accessToken}`;
    }
    return returnConfig;
  },
  (error: AxiosError) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<AxiosError>) => {
    const { config } = error;
    const refreshToken = customCookie.get.refreshToken();
    userReissueToken(refreshToken)
      .then((res) => {
        customCookie.remove.refreshToken();
        customCookie.set.token(res);
        if (config!.headers) {
          config!.headers.Authorization = `Bearer ${res.data.accessToken}`;
        }
        return axios(config!);
      })
      .catch(() => {
        customCookie.remove.accessToken();
        customCookie.remove.refreshToken();
        window.location.href = "/";
      });
  },
);
