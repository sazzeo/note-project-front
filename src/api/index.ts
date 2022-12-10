import axios, { AxiosRequestConfig } from "axios";
import { Options } from "@/types/common/api";

const API_PATH_PREFIX = "/api";

export const request = async (
  path: string,
  options?: Options
): Promise<any> => {
  const params = options?.params || {};
  const headers = options?.headers || {};
  const method = options?.method?.toLowerCase() || "get";
  const auth = $store().auth;

  const config: AxiosRequestConfig = {
    url: `${API_PATH_PREFIX}${path}`,
    method,
    withCredentials: true,
    timeout: 30 * 1000,
  };

  let defaultHeader = {
    Accept: "application/json",
  };

  const authToken = auth.member.authToken;
  console.log("authToken", auth.member.authToken);
  //인증 해더 셋팅하기
  if (authToken) {
    defaultHeader = Object.assign(defaultHeader, {
      Authorization: "Bearer " + authToken,
    });
  }

  if (method === "get") {
    config.params = params;
    console.log(config);
    defaultHeader = Object.assign(defaultHeader, {
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
    });
  }
  if (method === "post" || method === "put" || method === "delete") {
    config.data = params;
    defaultHeader = Object.assign(defaultHeader, {
      "Content-Type": "application/json; charset=utf-8",
    });
  }

  config.headers = Object.assign(defaultHeader, headers);

  try {
    const response = await axios(config);
    console.log(response);
    return Promise.resolve(response);
  } catch (error: any) {
    console.log(error.response);
    if (error.response.status == 401) {
      alert("로그인 하세요");
    }
    return Promise.reject(error.response.data);
  }
};
