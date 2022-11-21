import { Method } from "axios";

export interface Options {
  /** request method 설정 [GET(기본값)|POST|PUT|DELETE] */
  method?: Method;
  /** response 타입 설정 */
  responseType?: ResponseType;
  /** request 헤더값 설정 */
  headers?: Headers;
  /** request payload params */
  params?: any;
}
