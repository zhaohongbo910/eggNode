module.exports = app => {
    const { router, controller } = app;
    const indexRouter = router.namespace('/')
    const HomeController = controller.front.home.home
    
    
    indexRouter.get('/', HomeController.index);

    indexRouter.get('login', HomeController.login);
    indexRouter.get('register', HomeController.register);
    
    indexRouter.get('logOut',HomeController.logOut)
    // console.log(app.middleware,'middleware...............................')
    // 直接引进中间件进行数据前置操作效验
    // indexRouter.post('loginPost',require('../middleware/dataCheck')(),HomeController.loginPost);
    indexRouter.post('loginPost',HomeController.loginPost);
    indexRouter.post('register_post',HomeController.register_post);

   

};