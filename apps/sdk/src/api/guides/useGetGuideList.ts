import { guidesRouter } from ".";
import { instance } from "../axios";
import { useQuery } from "@tanstack/react-query";

export type GuidePageType = {
  guideId: number;
  guideTitle: string;
  path: string;
};

export type GetGuideListType = {
  data: {
    guides: GuidePageType[];
  };
};

export const useGetGuideList = (serviceId: number, path: string) => {
  return useQuery({
    queryKey: ["guidesPage"],
    queryFn: async () => {
      const { data } = await instance.get<GetGuideListType>(`${guidesRouter}/${serviceId}?path=${path}`);
      return data;
    },
  });
};
