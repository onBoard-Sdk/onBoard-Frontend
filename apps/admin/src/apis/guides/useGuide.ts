import { useMutation } from "@tanstack/react-query";
import { instance } from "../axios";

export type GuideRequestType = {
  guideTitle: string;
  path: string;
};

export type GuideResponseType = {
  guideId: number;
};

export function useGuide(guideId: number){
  return useMutation({
    mutationFn: (body:GuideRequestType) => instance.patch(`/guides/${guideId}`, body),
    onSuccess: (data) => {
      console.log(data);
    }
  });
};