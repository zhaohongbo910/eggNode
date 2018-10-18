'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    //
    // console.log(app.router.hostname,'router..................................................') 
    require('./router/indexRouter')(app);
     //用户路由
    require('./router/userRouter')(app);
    // 
};

/**
 * 夜深口燥梦已醒，
   卧床静听秋蝉鸣。
   闭眼续梦见佳人，
   如是佳人是伊人。
 */