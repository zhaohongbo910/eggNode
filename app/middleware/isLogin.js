/* 登录验证 */
module.exports = option =>{
    return async function isLogin(ctx,next) {
            console.log('start isLogin middleware ');
            ctx.logger.info('start isLogin middleware');
            ctx.logger.info('start isLogin middleware');
            let data = {};
            let EGG_SESS = ctx.session;
            if(EGG_SESS.hasOwnProperty('user')){
                let userInfo = await  ctx.session.user;
                data = {
                    token:true,
                    username:userInfo.username,
                    email:userInfo.email
                }
            } else {
                data = {
                    token:false,
                }
            }         
            console.log('end isLogin middleware');
            await next(ctx.isLogin = data);
    }
};