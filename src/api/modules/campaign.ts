import { AxiosPromise } from "axios";
import { request } from "@/api";

const API_PATH_PREFIX = "/campaigns";

export const campaignApi = {
  selectAll: (): AxiosPromise<any> => {
    return request(`${API_PATH_PREFIX}/test`, { method: "get" });
  },
};
