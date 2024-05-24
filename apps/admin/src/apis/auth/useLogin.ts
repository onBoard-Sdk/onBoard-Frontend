import { authRouter } from ".";
import { instance } from "../axios";
import { useMutation, MutationOptions } from "@tanstack/react-query";
import { customCookie } from "@/utils/customCookies";

export type TokenRequestType = {
  email: string;
  password: string;
  options?: MutationOptions;
};

export type TokenResponseType = {
  data: {
    accessToken: string;
    refreshToken: string;
    accessTokenExpirationTime: string;
    refreshTokenExpirationTime: string;
  };
};

export const useLogin = () => {
  return useMutation({
    mutationFn: (props: TokenRequestType) => instance.post<TokenResponseType>(`${authRouter}/sign-in`, props),
    onSuccess: (res) => {
      customCookie.set.token(res.data);
      window.location.href = "/service";
    },
  });
};
