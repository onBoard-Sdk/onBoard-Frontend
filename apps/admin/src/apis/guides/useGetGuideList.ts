import { useQuery } from "@tanstack/react-query";
import { guidesRouter } from ".";
import { instance } from "../axios";

export type GuideType = {
  guideId: number;
  guideTitle: string;
  path: string;
};

export type GetGuideListType = {
  data: {
    guides: GuideType[];
  };
};

export const useGetGuideList = () => {
  return useQuery({
    queryKey: ["guides"],
    queryFn: async () => {
      const { data } = await instance.get<GetGuideListType>(`${guidesRouter}`);
      return data;
    },
  });
};
