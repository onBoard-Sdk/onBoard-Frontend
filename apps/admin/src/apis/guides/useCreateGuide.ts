import { useMutation } from "@tanstack/react-query";
import { guidesRouter } from ".";
import { instance } from "../axios";
import { useNavigate } from "react-router-dom";

export type CreateGuideRequest = {
  serviceId: string;
  guideTitle: string;
  path: string;
  guideElements: {
    emoji: string;
    guideElementTitle: string;
    description: string;
    imageUrl: string;
    shape: string;
    width: number;
    length: number;
  }[];
};

export const useCreateGuide = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (props: CreateGuideRequest) => {
      return instance.post(`${guidesRouter}`, props);
    },
    onSuccess: () => navigate("/service"),
  });
};
