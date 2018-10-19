'use strict';

const Controller = require('egg').Controller;
const crypto = require('crypto');

const getSha1 = function(str) {
  let sha1 = crypto.createHash("sha1");//定义加密方式:md5不可逆,此处的md5可以换成任意hash加密的方法名称；
  sha1.update(str);
  let s = sha1.digest("hex");  //加密后的值d
  let md5 = crypto.createHash("md5")
  md5.update(s);
  let m = md5.digest("hex");  //加密后的值d
  return m
}

class loginController extends Controller{
	 /**
	 *  登录
	 */
	async loginGET(){
		let {ctx} = this
		let data = { name: 'egg' };
		console.log(ctx,'cccccccccccccccccccccccccccccccccccc')
		await this.ctx.render('front/login/login', data);
	}   
	/**
	 *  登录数据提交
	 *   @email
	 *   @password 
	 */
	async loginPOST(){
		let {ctx} = this
		let userParmas = {
			email:ctx.request.body.email,
			password:getSha1(ctx.request.body.password)
		}
		let data = {}
		let userResult = await ctx.service.userService.findUser(userParmas.email);
		// console.log(userResult,'>.............>>>>>>>>>>>>>>>>>>>>>>>>>>')
		if(Array.isArray(userResult) && userResult.length <=0){
		data = {
			status:'5000',
			message:'暂无该用户信息，请注册',
			data:null
		}
		}else{
		let user = userResult[0]
		console.log(user,'user..............')
		if(user.password === userParmas.password){
				// 生成Token 
				// let EGG_TOKEN =  userParmas.email + '$' + getSha1(String(new Date().getTime())) + Math.random()*10000
				// 设置cookies 
				// ctx.cookies.set('EGG_TOKEN', EGG_TOKEN,{
			// expires:new Date('2018-10-20 00:00:00'),
			// signed: false,
			// encrypt:true // Cookie 进行加密
				// });
				//设置session信息
			ctx.session = {
			userId:userParmas.email,
			}
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

	 /**
	 *  注册
	 */
	async registerGET(){
		let data = { name: 'egg' };
		await this.ctx.render('front/login/register', data);
	}
	/**
	 *  注册提交
	 */
  	async registerPOST(){
		let {ctx} = this;
		let userParmas = {
		username:ctx.request.body.username,
		email:ctx.request.body.email,
		password:getSha1(ctx.request.body.password)
		}
		console.log(userParmas,'parom,,,,,,,,,,,,,,,,,,,,,,,,,,,')
		const userResult = await ctx.service.userService.findEmail(userParmas.email);
		console.log(userResult,'userkfldkfklklfdkkldfdf')
		let data = {}
		if(Array.isArray(userResult)&&userResult.length<=0){
			const result =  await ctx.service.userService.created(userParmas)  
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

	async logoutGET(){
		let {ctx} = this
		ctx.session = null
		let data = {
			status:'2000',
			message:'退出成功',
			data:null
		}
		ctx.body = data
	}
}

module.exports = loginController;



