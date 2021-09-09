import { defHttp } from "src/utils/service/index";

/** 模拟登录接口 */
export function login(params: { username: string; password: string }) {
  return defHttp.request({
    method: "post",
    params,
    url: "/api/login",
  });
}
