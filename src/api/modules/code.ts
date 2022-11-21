import { AxiosPromise } from "axios";
import { request } from "@/api";
import { Code } from "@/types/common/code";
import { SelectBox } from "@/types/common/selectBox";

const API_PATH_PREFIX = "/codes";

export const codeApi = {
  selectAll: (): AxiosPromise<Code> => {
    return request(`${API_PATH_PREFIX}`, { method: "get" });
  },
  select: (code: Array<string>): AxiosPromise<SelectBox> => {
    return request(`${API_PATH_PREFIX}`, {
      method: "get",
      params: { code: code.join(",") },
    });
  },
};
