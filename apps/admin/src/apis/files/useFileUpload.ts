import { filesRouter } from ".";
import { instance } from "../axios";

export const useFileUpload = async (props: File) => {
  const form = new FormData();
  form.append("file", props);
  const { data } = await instance.post(filesRouter, form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data.data.url;
};
