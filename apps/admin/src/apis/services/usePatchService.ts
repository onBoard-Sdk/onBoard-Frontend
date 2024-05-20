import { useMutation } from "@tanstack/react-query";
import { instance } from "../axios";
import { ServiceForm, servicesRouter } from ".";
import { useFileUpload } from "../files";

export const usePatchService = (serviceId: number | undefined) => {
  return useMutation({
    mutationFn: async (props: ServiceForm) => {
      const { logoImageUrl, ...rest } = props;
      let requestBody = {};
      if (typeof logoImageUrl !== "string") {
        const uploadedImage = await useFileUpload(logoImageUrl[0] as File);
        requestBody = {
          logoImageUrl: uploadedImage,
          ...rest,
        };
      } else requestBody = props;
      return instance.patch(`${servicesRouter}/${serviceId}`, requestBody);
    },
    onSuccess: () => (window.location.href = "/service"),
  });
};
