import { authRouter } from ".";
import { instance } from "../axios";
import { useMutation, MutationOptions } from "@tanstack/react-query";

export type CheckEmailVerifyType = {
  email: string;
  authCode: string;
  options?: MutationOptions;
};

export const useCheckEmailVerify = ({ email, authCode, options }: CheckEmailVerifyType) => {
  return useMutation({
    ...options,
    mutationFn: () => instance.get(`${authRouter}/codes?email=${email}&authCode=${authCode}`),
  });
};
