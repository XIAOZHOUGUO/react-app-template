import type { AxiosRequestConfig } from "axios";

import { AxiosTransform } from "./transform";

export interface RequestOptions {
  requiredAuth?: boolean;
  [propName: string]: any;
}

export interface CreateAxiosOptions extends AxiosRequestConfig {
  transform?: AxiosTransform;
  requestOptions?: RequestOptions;
}

export interface Result<T = any> {
  /** 服务器响应的 HTTP 状态码 */
  status: number;
  /** 是否请求成功 */
  rel: boolean;
  /** 提示信息 */
  message?: string;
  /** 服务器响应的具体数据 */
  data?: T;
}

export enum ContentTypeEnum {
  // json
  JSON = "application/json;charset=UTF-8",
  // form-data qs
  FORM_URLENCODED = "application/x-www-form-urlencoded;charset=UTF-8",
  // form-data  upload
  FORM_DATA = "multipart/form-data;charset=UTF-8",
}
export enum RequestEnum {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
}

export enum ResultEnum {
  SUCCESS = 200,
}
