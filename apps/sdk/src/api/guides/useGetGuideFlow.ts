import { guidesRouter } from ".";
import { instance } from "../axios";
import { useQuery } from "@tanstack/react-query";
import { GuidePageType } from "./useGetGuideList";

export type GuideFlowType = {
  sequence: number;
  emoji: string;
  guideElementTitle: string;
  description: string;
  imageUrl: string;
  shape: string;
  width: string;
  length: string;
};

export type GetGuideFlowType = {
  data: {
    guide: GuidePageType;
    guideElements: GuideFlowType[];
  };
};

export const useGetGuideFlow = (guideId: number) => {
  return useQuery({
    queryKey: ["guidesFlow"],
    queryFn: async () => {
      const { data } = await instance.get<GetGuideFlowType>(`${guidesRouter}/${guideId}/flows`);
      return data;
    },
  });
};
