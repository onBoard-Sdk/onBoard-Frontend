import { useQuery } from "@tanstack/react-query";
import { feedbacksRouter } from ".";
import { instance } from "../axios";

export type FeedbackType = {
  title: string;
  content: string;
  path: string;
};

export type FeedbackListType = {
  data: {
    feedbacks: FeedbackType[];
  };
};

export const useGetFeedbacks = (serviceId: string) => {
  return useQuery({
    queryKey: ["feedbacks", serviceId],
    queryFn: async () => {
      const { data } = await instance.get<FeedbackListType>(`${feedbacksRouter}/${serviceId}`);
      return data;
    },
  });
};
