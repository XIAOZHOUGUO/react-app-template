/**
 * @sort 1
 * @name 接口示例
 * 接口描述信息，支持html标签
 * 更多 mock 语法请参考 <a href="http://mockjs.com/examples.html" target="_blank">mockjs</a>
 */
const { api, delay, mock, resp } = require("apite");

/**
 * @name 模拟登录
 * 点击在线调试传参数请求看看
 * @param {number} username 用户名
 * @param {number} password 密码
 */
api.post("/login", ctx => {
  const { username, password } = ctx.post;

  if (username === "admin" && password === "123456") {
    return {
      status: 200,
      rel: true,
      data: mock("@guid"),
    };
  } else {
    return {
      status: 400,
      rel: false,
      message: "用户名或密码错误，请重试",
    };
  }
});

/**
 * @name 模拟mock数据
 * 点击在线调试传参数请求看看
 * @param {string} name 名称
 * @param {number} [age=10] 年龄
 * @param {boolean} [online=true] 是否在线
 */
api.post("/getTest", ctx => {
  return {
    status: 200,
    rel: true,
    data: mock({
      id: "@id",
      "number|1-100": 100,
      name: "@name",
      cname: "@cname",
      date: "@dateTime",
      reg: /\w{10}/,
    }),
  };
});
