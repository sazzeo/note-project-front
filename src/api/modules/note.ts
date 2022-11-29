import { AxiosPromise } from "axios";
import { request } from "@/api";

const API_PATH_PREFIX = "/note";

export const noteApi = {
  get: (id: string): AxiosPromise<any> => {
    return request(`${API_PATH_PREFIX}`, {
      method: "get",
      params: id,
    });
  },
};
