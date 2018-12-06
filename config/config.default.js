'use strict';
const path = require('path');
module.exports = appInfo => {
  // console.log(appInfo)
  const config = exports = {
    keys:appInfo.name + '_1536887278778_3918',
    middleware:['gzip'],
    static:{
      dir: path.join(appInfo.baseDir, 'app/public')
    },
    view:{
      root: [path.join(appInfo.baseDir, 'app/view')].join(','), // 模板文件的根路径,
      cache:true, // 模板路径缓存，默认开启
      mapping:{
        '.html':'nunjucks'  //匹配模板名
      },
      defaultViewEngine: 'nunjucks', //文件后缀和模板引擎的映射
      defaultExtension:'.html'
    },
    // assets:{
    //   publicPath: '/public/',
    //   devServer: {
    //     debug: false,
    //     command: 'umi dev',
    //     port: 7001,
    //     env: {
    //       APP_ROOT: process.cwd() + '/app/public',
    //       BROWSER: 'none',
    //       ESLINT: 'none',
    //       SOCKET_SERVER: 'http://127.0.0.1:7001',
    //       PUBLIC_PATH: 'http://127.0.0.1:7001',
    //     },
    //   },
    // },
    //日志处理
    logger: {
      appLogName: `${appInfo.name}-web.log`, // 应用相关日志
      coreLogName: 'egg-web.log', //框架内核、插件日志
      agentLogName: 'egg-agent.log', //agent 进程日志
      errorLogName: 'common-error.log', //日志定位异常
      consoleLevel: 'DEBUG',
    },
    gzip:{
      enable: false,
    },
    mysql:{
      // 单数据库信息配置
      client: {
        // host
        host: '127.0.0.1',
        // 端口号
        port: '3306',
        // 用户名
        user: 'root',
        // 密码
        password: 'root',
        // 数据库名
        database: 'egg',
      },
      // 是否加载到 app 上，默认开启
      app: true,
      // 是否加载到 agent 上，默认关闭
      agent: false,
    },
    redis:{
      host:'127.0.0.1',
      port: 6379,
    },
    // sequelize:{
    //   dialect: 'mysql',
    //   host: '127.0.0.1',
    //   user:"root",
    //   password:'root',
    //   port: 3306,
    //   database: 'egg',
    // }
  };
  return config;
};
