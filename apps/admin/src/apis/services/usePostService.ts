import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { servicesRouter } from ".";
import { instance } from "../axios";
import { useFileUpload } from "../files";

export type ServiceForm = {
  name: string;
  logoImageUrl: FileList | string;
  serviceUrl: string;
};

export const usePostService = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (props: ServiceForm) => {
      const { logoImageUrl, ...rest } = props;
      const uploadedImage = await useFileUpload(logoImageUrl[0] as File);
      const requestBody = {
        logoImageUrl: uploadedImage,
        ...rest,
      };
      return instance.post(`${servicesRouter}`, requestBody);
    },
    onSuccess: () => navigate("/service"),
  });
};
