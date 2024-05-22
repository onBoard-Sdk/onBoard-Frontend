import { Cookies } from "react-cookie";
import { TokenResponseType } from "@/apis/auth";

const cookies = new Cookies();

export const customCookie = {
  get: {
    accessToken: () => cookies.get("accessToken"),
    refreshToken: () => cookies.get("refreshToken"),
  },
  set: {
    token: ({ data }: TokenResponseType) => {
      const accessTokenExpires = new Date(data.accessTokenExpirationTime.replace("T", " "));
      const refreshTokenExpires = new Date(data.refreshTokenExpirationTime.replace("T", " "));

      cookies.set("accessToken", data.accessToken, {
        path: "/",
        expires: accessTokenExpires,
      });
      cookies.set("refreshToken", data.refreshToken, {
        path: "/",
        expires: refreshTokenExpires,
      });
    },
  },
  remove: {
    accessToken: () => cookies.remove("accessToken"),
    refreshToken: () => cookies.remove("refreshToken"),
  },
} as const;
