module.exports = app => {
    const { router, controller } = app;
    const indexRouter = router.namespace('/')

    console.log(controller)
    const HomeController = controller.comHomeController.homeController
    
    // console.log(HomeController,'vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv')
    indexRouter.get('/', HomeController.indexGET);
    // indexRouter.get('*',HomeController.htmlGet)
};