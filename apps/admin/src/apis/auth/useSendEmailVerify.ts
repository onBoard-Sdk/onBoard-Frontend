import { authRouter } from ".";
import { instance } from "../axios";
import { useMutation, MutationOptions } from "@tanstack/react-query";

export type sendEmailVerifyType = {
  email: string;
  options?: MutationOptions;
};

export const useSendEmailVerify = ({ options, ...props }: sendEmailVerifyType) => {
  return useMutation({
    ...options,
    mutationFn: () => instance.post(`${authRouter}/codes`, props),
  });
};
