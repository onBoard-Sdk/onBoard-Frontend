import { servicesRouter } from ".";
import { instance } from "../axios";
import { useQuery } from "@tanstack/react-query";

export type ServiceType = {
  serviceId: number;
  name: string;
  logoImageUrl: string;
  serviceUrl: string;
};

export type GetServicesType = {
  data: {
    services: ServiceType[];
  };
};

export const useGetServices = () => {
  return useQuery({
    queryKey: ["serviceList"],
    queryFn: async () => {
      const { data } = await instance.get<GetServicesType>(`${servicesRouter}`);
      return data;
    },
  });
};
