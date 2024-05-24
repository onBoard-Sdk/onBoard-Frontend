import axios from "axios";
import { authRouter, TokenResponseType } from ".";
import { apiVersion } from "../axios";

export const userReissueToken = async (refreshToken: string) => {
  const { data } = await axios.put<TokenResponseType>(
    `${import.meta.env.VITE_BASE_URL}${apiVersion}${authRouter}/reissue`,
    null,
    {
      headers: {
        "refresh-token": refreshToken,
      },
    },
  );
  return data;
};
