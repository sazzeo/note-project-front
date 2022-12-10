import { AxiosPromise } from "axios";
import { request } from "@/api";
import { Note } from "@/types/common/note";

const API_PATH_PREFIX = "/notes";

export const noteApi = {
  getAll: (id: string): AxiosPromise<any> => {
    return request(`${API_PATH_PREFIX}`, {
      method: "get",
      params: { id },
    });
  },
  get: (noteSeq: number | string): AxiosPromise<any> => {
    return request(`${API_PATH_PREFIX}/${noteSeq}`, {
      method: "get",
    });
  },
  addNote: (note: Note): AxiosPromise<any> => {
    return request(`${API_PATH_PREFIX}`, {
      method: "post",
      params: note,
    });
  },
  modify: (note: Note): AxiosPromise<any> => {
    return request(`${API_PATH_PREFIX}`, {
      method: "put",
      params: note,
    });
  },
  remove: (noteSeq: number): AxiosPromise<any> => {
    return request(`${API_PATH_PREFIX}`, {
      method: "delete",
      params: noteSeq,
    });
  },
};
