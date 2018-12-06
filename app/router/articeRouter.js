module.exports = app => {
    const { router, controller,middleware } = app;
    const Router = router.namespace('/artice');
    const ArticeController = controller.comArticeController.articeController;
    
    Router.get('/write',middleware.isLogin(),ArticeController.articeGET);
    Router.post('/picupfile',middleware.isLogin(),ArticeController.picupfile)
};
