import { VAxios } from "./axios";
import type { AxiosResponse } from "axios";
import { AxiosTransform } from "./transform";
import { errorResult } from "./const";
import { isString, deepMerge } from "../index";
import { getItemStorage } from "../sessionStorage";
import type { CreateAxiosOptions, RequestOptions, Result } from "./types";
import { RequestEnum, ContentTypeEnum, ResultEnum } from "./types";

/**
 * @description: 数据处理，方便区分多种处理方式
 */
const transform: AxiosTransform = {
  transformRequestData: (
    res: AxiosResponse<Result>,
    options: RequestOptions
  ) => {
    // 处理逻辑按照真实情况做调整
    if (!res.data) {
      return errorResult;
    }

    const { status, data, message } = res.data;
    const hasSuccess =
      data &&
      ((Reflect.has(res.data, "status") && status === ResultEnum.SUCCESS) ||
        res.status === ResultEnum.SUCCESS);

    if (!hasSuccess) {
      if (message) {
        console.log(`message`, message);
      }

      Promise.reject(new Error(message));
      return errorResult;
    }

    if (status === ResultEnum.SUCCESS || hasSuccess) {
      return data;
    }
    return errorResult;
  },

  beforeRequestHook: (config, options) => {
    if (config.method === RequestEnum.GET) {
      // const now = new Date().getTime();
      // if (!isString(config.params)) {
      //   config.data = {
      //     // 给 get 请求加上时间戳参数，避免从缓存中拿数据。
      //     params: Object.assign(config.params || {}, {
      //       _t: now,
      //     }),
      //   };
      // } else {
      //   // 兼容restful风格
      //   config.url = config.url + config.params + `?_t=${now}`;
      //   config.params = undefined;
      // }
    } else {
      if (!isString(config.params)) {
        config.data = config.params;
        config.params = undefined;
      } else {
        // 兼容restful风格
        config.url = config.url + config.params;
        config.params = undefined;
      }
    }
    return config;
  },

  requestInterceptors: config => {
    // 请求之前处理config,如在header中添加token
    if (getItemStorage("token")) {
      config.headers.Authorization = getItemStorage("token");
    }
    return config;
  },

  responseInterceptorsCatch: (error: any) => {
    // ...
    return Promise.reject(error);
  },
};

function createAxios(opt?: Partial<CreateAxiosOptions>) {
  return new VAxios(
    deepMerge(
      {
        timeout: 10 * 1000,
        headers: { "Content-Type": ContentTypeEnum.JSON },
        // 数据处理方式
        transform,
        // ...
      },
      opt || {}
    )
  );
}
export const defHttp = createAxios();
