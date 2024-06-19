import { feedbacksRouter } from ".";
import { instance } from "../axios";
import { useMutation } from "@tanstack/react-query";

export type SignupType = {
  serviceId: number;
  path: string;
  title: string;
  content: string;
};

export const useWriteFeedback = (onSuccessFn: () => void) => {
  return useMutation({
    mutationFn: (props: SignupType) => instance.post(feedbacksRouter, props),
    onSuccess: onSuccessFn,
  });
};
