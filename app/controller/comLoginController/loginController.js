'use strict';

const Controller = require('egg').Controller;


class loginController extends Controller{
	 /*
	 *  登录
	 */
	async loginGET(){
		let {ctx} = this;
		let data = {};
		await this.ctx.render('AdminLTE/pages/login/login.html', data);
	}   
	/*
	 *  登录数据提交
	 *   @params email 
	 *   @Params password 
	 */
	async loginPOST(){
		let {ctx} = this;
		let userParmas = {
			email:ctx.request.body.email,
			password:await ctx.getSha1(ctx.request.body.password)
		};
		console.log(userParmas,'bbbbbbbbbbbbbbbbbb');
		let data = {};
		// 查询用户信息
		let userResult = await ctx.service.userService.findUser(userParmas.email);
		if(Array.isArray(userResult) && userResult.length <=0){
			data = {
				status:'5000',
				message:'暂无该用户信息，请注册',
				data:null
			}
		}else{
			let user = userResult[0];
			console.log(user,'user..............');
			if(user.password === userParmas.password){
				/* 生成Token 
				* let EGG_TOKEN =  userParmas.email + '$' + ctx.getSha1(String(new Date().getTime())) + Math.random()* 10000
				* 设置cookies 
				* ctx.cookies.set('EGG_TOKEN', EGG_TOKEN,{
				*      expires:new Date('2018-10-20 00:00:00'),
				*      signed: false,
				*      encrypt:true // Cookie 进行加密
				* });
				*/
				/*
				* 设置session信息
				*/
				ctx.session.user = {
                    email:user.email,
                    username:user.username,
				};
				console.log(ctx.session);
				data = {
					status:'2000',
					message:'登录成功',
					data:null
				}
			}else{
				data = {
					status:'5000',
					message:'密码错误',
					data:null
				}
			}
		}
		ctx.body = data
	}
	 /*
	 *  注册
	 */
	async registerGET(){
		let data = {};
		await this.ctx.render('AdminLTE/pages/login/register.html', data);
	}
	/*
	 *  注册提交
	 */
  	async registerPOST(){
		let {ctx} = this;
		let userParmas = {
		username:ctx.request.body.username,
		email:ctx.request.body.email,
		password:await ctx.getSha1(ctx.request.body.password)   //密码加密
		};
		// 调用service 查询
		const userResult = await ctx.service.userService.findEmail(userParmas.email);
		let data = {};
		if(Array.isArray(userResult)&&userResult.length<=0){
			// service 创建用户
			const result =  await ctx.service.userService.created(userParmas);
			if(result.affectedRows === 1){
				data = {
					status:2000,
					message:'注册成功',
					data:null,
				}
			}else{
				data = {
					status:5000,
					message:'注册失败',
					data:null,
				}
			}
		}else{
			data = {
				status:'5000',
				message:'该邮箱已经使用，请跟换邮箱或者找回密码',
				data:null
			}
	  }
	  ctx.body = data
  	}
	/* 
	* @退出路由
	*/
	async logoutGET(){
		let {ctx} = this;
		ctx.session = null;
		let data = {
			status:'2000',
			message:'退出成功',
			data:null
		};
		ctx.body = data
	}
}


module.exports = loginController;



