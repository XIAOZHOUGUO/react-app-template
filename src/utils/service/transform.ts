import type { AxiosRequestConfig, AxiosResponse } from "axios";
import { Result, RequestOptions } from "./types";

export abstract class AxiosTransform {
  /**
   * @description: 请求之前处理配置
   */
  beforeRequestHook?: (
    config: AxiosRequestConfig,
    options: RequestOptions
  ) => AxiosRequestConfig;

  /**
   * @description: 请求成功后处理数据
   */
  transformRequestData?: (
    res: AxiosResponse<Result>,
    options: RequestOptions
  ) => any;

  /**
   * @description: 请求失败处理
   */
  requestCatch?: (e: Error) => Promise<any>;

  /**
   * @description: 请求拦截器
   */
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;

  /**
   * @description: 响应拦截器
   */
  responseInterceptors?: (res: AxiosResponse<any>) => AxiosResponse<any>;

  /**
   * @description: 请求拦截器错误处理
   */
  requestInterceptorsCatch?: (error: Error) => void;

  /**
   * @description: 响应拦截器错误处理
   */
  responseInterceptorsCatch?: (error: Error) => void;
}
