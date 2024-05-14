import axios from "axios";
import { authRouter, TokenResponseType } from ".";

export const userReissueToken = async (refreshToken: string) => {
  const { data } = await axios.put<TokenResponseType>(
    `${import.meta.env.VITE_BASE_URL}${authRouter}/reissue`,
    null,
    {
      headers: {
        "X-Refresh-Token": `${refreshToken}`,
      },
    },
  );
  return data;
};
