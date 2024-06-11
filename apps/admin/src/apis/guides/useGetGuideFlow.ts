import { useQuery } from "@tanstack/react-query";
import { guidesRouter, GuideType } from ".";
import { instance } from "../axios";

export type GuideElement = {
  sequence: string;
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
    guide: GuideType;
    guideElements: GuideElement[];
  };
};

export const useGetGuideFlow = (guideId: string) => {
  return useQuery({
    queryKey: ["guideFlow", guideId],
    queryFn: async () => {
      const { data } = await instance.get<GetGuideFlowType>(`${guidesRouter}/${guideId}/flows`);
      return data;
    },
  });
};
