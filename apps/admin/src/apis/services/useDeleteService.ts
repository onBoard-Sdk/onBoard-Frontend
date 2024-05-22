import { useNavigate } from "react-router-dom";
import { servicesRouter } from ".";
import { instance } from "../axios";
import { useMutation } from "@tanstack/react-query";

export const useDeleteService = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (id: number) => instance.delete(`${servicesRouter}/${id}`),
    onSuccess: () => navigate("/service"),
    onError: () => alert("서비스 삭제에 실패하였습니다."),
  });
};
