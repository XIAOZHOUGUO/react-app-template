/** craco-config.js： https://www.npmjs.com/package/@craco/craco#installation */
const AntdDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin");
const path = require("path");
const pathResolve = pathUrl => path.join(__dirname, pathUrl);
module.exports = {
  webpack: {
    alias: {
      "@": pathResolve("src"),
    },
    plugins: [new AntdDayjsWebpackPlugin()],
    configure: (webpackConfig, { env, paths }) => {
      return webpackConfig;
    },
  },
  style: {
    // modules: {},
    // css: {},
    // sass: {
    //   loaderOptions: {
    //     data: `@import "~@/assets/css/variable.scss";@import "~@/assets/css/base.scss";`
    //   }
    // },
    // postcss: {}
  },
  babel: {
    plugins: [
      [
        "import",
        {
          libraryName: "antd",
          libraryDirectory: "es",
          style: "css", //设置为true即是less,此时需要配置 craco-less一起才能生效
        },
      ],
    ],
  },
  plugins: [],
  devServer: {
    // port: 9999, // 端口配置
    // proxy: {
    //   "/api": {
    //     target: "http://xxx.com",
    //     ws: false, // websocket
    //     changeOrigin: true, //是否跨域
    //     secure: false, // 如果是https接口，需要配置这个参数
    //     pathRewrite: {
    //       "^/api": "/api",
    //     },
    //   },
    // },
  },
};
