'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller ,middleware} = app;
    // 首页
    require('./router/indexRouter')(app);
     //用户路由
    require('./router/userRouter')(app);
    // 登录
    require('./router/loginRouter')(app);
    // 文章
    require('./router/articeRouter')(app);

    router.get('*',controller.comHomeController.homeController.notFound)
    // 
};

/**
 * 夜深口燥梦已醒，
   卧床静听秋蝉鸣。
   入眠续梦见佳人，
   如是佳人是伊人。
 */