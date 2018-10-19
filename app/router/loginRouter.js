module.exports = (app) =>{
    const { router, controller } = app;
    const loginRouter = router.namespace('/login');
    const LoginController = controller.comLoginController.loginController
    // const 
    
    //登录
    loginRouter.get('/login_get', LoginController.loginGET);
    // 中间效验
     // loginRouter.post('loginPost',require('../middleware/dataCheck')(),LoginController.loginPost);
    loginRouter.post('/login_post',LoginController.loginPOST);

    // 注册
    loginRouter.get('/register_get', LoginController.registerGET);
    loginRouter.post('/register_post', LoginController.registerPOST);
    // 退出
    loginRouter.get('/logout_get',LoginController.logoutGET)
}