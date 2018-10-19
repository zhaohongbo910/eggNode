module.exports = app => {
    const { router, controller } = app;
    const userRouter = router.namespace('/user');
    
    // userRouter.get('/', controller.front.user.user.index);
    // userRouter.get('/test', controller.front.user.user.action);
};