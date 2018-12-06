module.exports = app => {
    const { router, controller ,middleware} = app;
    const Router = router.namespace('/user');
    const  userController  = controller.comUserController.userController
    
    Router.get('/',middleware.isLogin(), userController.index);
    Router.get('/update',middleware.isLogin(), userController.update);
    
};