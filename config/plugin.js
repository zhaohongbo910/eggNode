'use strict';
const path = require('path');
// had enabled by egg
exports.static = true;

//配置路由plus 
exports.routerPlus = {
    enable: true,
    package: 'egg-router-plus',
};
// exports.assets = {
//   enable: true,
//   package: 'egg-view-assets',
// };
// 配置模板引擎
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};
// 数据库操作

exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};

// 数据库ORM 操作
// exports.sequelize = {
//   enable: true,
//   package: 'egg-sequelize',
// };
/* 
 * ！seesion回话
 * 
 * 
*/
exports.session = {
  enable: true,
  key: 'EGG_SESS',
  maxAge: 5 * 1000, // 1 天
  httpOnly: true,   // 
  encrypt: false,   // 加密传输
};

/* redis 开启 */
// exports.redis = {
//   enable: true,
//   package: 'egg-redis',
// };
// sessionRedis 开启
// exports.sessionRedis = {
//   enable: true,
//   package: 'egg-session-redis',
// };

exports.security={
    xframe: {
      enable: false,
    },
    csrf: {
      enable: false,
      // ignore: ctx => isInnerIp(ctx.ip),
      queryName: '_csrf', // 通过 query 传递 CSRF token 的默认字段为 _csrf
      bodyName: '_csrf', // 通过 body 传递 CSRF token 的默认字段为 _csrf
      headerName: 'x-csrf-token',
      useSession: true, // 默认为 false，当设置为 true 时，将会把 csrf token 保存到 Session 中
      cookieName: 'csrfToken', // Cookie 中的字段名，默认为 csrfToken
      sessionName: 'csrfToken', // Session 中的字段名，默认为 csrfToken
    },

  };


// 挂载 本地插件
exports.ua = {
  enable:true,
  path:path.join(__dirname,'../lib/plugin/egg-ua')
};