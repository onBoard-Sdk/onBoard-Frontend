import { useQuery } from "@tanstack/react-query";
import { GuideType, guidesRouter } from ".";
import { instance } from "../axios";

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
