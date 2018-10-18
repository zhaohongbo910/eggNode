module.exports = option =>{
    return async function dataCheck(ctx,next) {
            await next();
            // console.log(ctx,'cheac')
            let email = ctx.request.body.email
            let password = ctx.request.body.password
            if(email=='' || password==''){
                let data = {
                    status:'401',
                    message:'用户名和密码不能为空',
                    data:''
                }
                ctx.body = data
            }   
    }
}