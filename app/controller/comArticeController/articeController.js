'use strict';

const Controller = require('egg').Controller;

class articeController extends Controller{
    async articeGET(){
        let {ctx}  = this
        let isLogin = ctx.isLogin;
        let res_data = isLogin;
        await this.ctx.render('front/artice/write',res_data);      
    }

    async picupfile(){
       let {ctx} = this;
       ctx.request.cookies;
       let csrfToken =  ctx.cookies.get('csrfToken');
       console.log(csrfToken)
       console.log(ctx.request.body)
    }
}

module.exports = articeController;