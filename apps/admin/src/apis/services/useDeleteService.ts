import { servicesRouter } from ".";
import { instance } from "../axios";

export const useDeleteService = (id: number) => {
  return instance
    .delete(`${servicesRouter}/${id}`)
    .then(() => (window.location.pathname = "/service"))
    .catch(() => alert("서비스 삭제에 실패하였습니다."));
};
