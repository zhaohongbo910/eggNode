module.exports = app => {
    const { router, controller,middleware } = app;
    const Router = router.namespace('/');
    const HomeController = controller.comHomeController.homeController;
    Router.get('/', middleware.isLogin(),HomeController.indexGET);
};
