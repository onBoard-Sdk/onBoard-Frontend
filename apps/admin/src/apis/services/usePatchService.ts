import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { ServiceForm, servicesRouter } from ".";
import { instance } from "../axios";
import { useFileUpload } from "../files";

export const usePatchService = (serviceId: number | undefined) => {
  const navigate = useNavigate();
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
    onSuccess: () => navigate("/service"),
  });
};
