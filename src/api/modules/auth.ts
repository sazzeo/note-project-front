import { AxiosPromise } from "axios";
import { request } from "@/api";
import {Member} from "@/types/member";

const API_PATH_PREFIX = "/auth";

export const authApi = {
    login: (member : Member): AxiosPromise<any> => {
        return request(`${API_PATH_PREFIX}`, { method: "post" , params : member });
    },
};
