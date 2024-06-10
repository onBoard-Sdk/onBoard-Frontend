import { useMutation } from "@tanstack/react-query";
import { instance } from "../axios";
import { toast } from "react-toastify";

export type GuideRequestType = {
  guideTitle: string;
  path: string;
};

export type GuideResponseType = {
  guideId: number;
};

export function useSaveGuide(guideId: number) {
  return useMutation({
    mutationFn: (body: GuideRequestType) => instance.patch(`/guides/${guideId}`, body),
    onSuccess: () => {
      toast.success("가이드 수정이 완료되었습니다.");
    },
  });
}
