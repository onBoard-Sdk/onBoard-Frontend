import { authRouter } from ".";
import { instance } from "../axios";
import { useMutation, MutationOptions } from "@tanstack/react-query";

export type LoginRequestType = {
  email: string;
  password: string;
  options?: MutationOptions;
};

export type LoginResponseType = {
  access_token: string;
  refresh_token: string;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: (props: LoginRequestType) => instance.post(`${authRouter}/sign-in`, props),
    onSuccess: (e) => {
      // window.location.href = "http://localhost:3000";
      console.log(e.data);
    },
  });
};
