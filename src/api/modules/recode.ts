import { AxiosPromise } from "axios";
import { request } from "@/api";
import { Note } from "@/types/common/note";
import { Recode } from "@/types/common/recode";

const API_PATH_PREFIX = "/recodes";

export const recodeApi = {
  addNote: (note: Note): AxiosPromise<any> => {
    return request(`${API_PATH_PREFIX}`, {
      method: "post",
      params: note,
    });
  },
  getRecode: (id: string): AxiosPromise<any> => {
    return request(`${API_PATH_PREFIX}`, {
      method: "get",
      params: { id },
    });
  },
  addRecode: (recode: Recode): AxiosPromise<any> => {
    return request(`${API_PATH_PREFIX}`, {
      method: "post",
      params: recode,
    });
  },
};
