import { AxiosPromise } from "axios";
import { request } from "@/api";
import { Note, Recode } from "@/types/common/note";

const API_PATH_PREFIX = "/notes";

export const noteApi = {
  addNote: (note: Note): AxiosPromise<any> => {
    return request(`${API_PATH_PREFIX}`, {
      method: "post",
      params: note,
    });
  },
  getRecode: (id: string): AxiosPromise<any> => {
    return request(`${API_PATH_PREFIX}/recodes`, {
      method: "get",
      params: { id },
    });
  },
  addRecode: (recode: Recode): AxiosPromise<any> => {
    return request(`${API_PATH_PREFIX}/recodes`, {
      method: "post",
      params: recode,
    });
  },
};
