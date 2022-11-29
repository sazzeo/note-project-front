import axios, { AxiosRequestConfig } from "axios";
import { Options } from "@/types/common/api";

const API_URL_PREFIX = "/api/dmcrm";
/**
 *
 * @param path
 * @param options
 */
export const request = async (
  path: string,
  options?: Options
): Promise<any> => {
  const params = options?.params || {};
  const headers = options?.headers || {};
  const method = options?.method?.toLowerCase() || "get";

  const config: AxiosRequestConfig = {
    url: `${path}`,
    method,
    withCredentials: true,
    timeout: 30 * 1000,
  };

  let defaultHeader = {
    Accept: "application/json",
  };

  if (method === "get") {
    config.params = params;
    console.log(config);
    defaultHeader = Object.assign(defaultHeader, {
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
    });
  }
  if (method === "post" || method === "update" || method === "delete") {
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
    return Promise.reject(error.response.data);
  }
};
