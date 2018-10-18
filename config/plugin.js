'use strict';

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
}

/* redis 开启 */
// exports.redis = {
//   enable: true,
//   package: 'egg-redis',
// };

// exports.sessionRedis = {
//   enable: true,
//   package: 'egg-session-redis',
// };