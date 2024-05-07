import { teamsRouter } from ".";
import { instance } from "../axios";
import { useMutation } from "@tanstack/react-query";

export type signupType = {
  email: string;
  password: string;
  name?: string;
  logo_image_url?: string;
};

export const useSignup = () => {
  return useMutation({
    mutationFn: (props: signupType) => instance.post(`${teamsRouter}/sign-up`, props),
    onSuccess: () => (window.location.href = "http://localhost:3000"),
  });
};
