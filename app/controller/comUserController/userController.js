'use strict';

const Controller = require('egg').Controller;

class userController extends Controller {

	async index(){
		let {ctx} = this;
		let res_data = ctx.isLogin;
		await this.ctx.render('front/user/user', res_data);
	}

	async update() {
		// console.log(this.app.middlewares)
		this.ctx.body = 'hi, egg';
	}
	
}

module.exports = userController;
