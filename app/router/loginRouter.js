module.exports = (app) =>{
    const { router, controller } = app;
    const Router = router.namespace('/holly');
    const LoginController = controller.comLoginController.loginController;
    //登录 -get
    Router.get('/login', LoginController.loginGET);
    //登录 -post
    Router.post('/loginPost',LoginController.loginPOST);
    // 注册-get
    Router.get('/register', LoginController.registerGET);
    // 登录-post
    Router.post('/registerPost', LoginController.registerPOST);
    // 退出-get
    Router.get('/signOut',LoginController.logoutGET);
};