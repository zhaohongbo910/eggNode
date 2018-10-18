'use strict';

const Controller = require('egg').Controller;
var crypto = require('crypto');

const getSha1 = function(str) {
  let sha1 = crypto.createHash("sha1");//定义加密方式:md5不可逆,此处的md5可以换成任意hash加密的方法名称；
  sha1.update(str);
  let s = sha1.digest("hex");  //加密后的值d
  let md5 = crypto.createHash("md5")
  md5.update(s);
  let m = md5.digest("hex");  //加密后的值d
  return m
}

class HomeController extends Controller {
  /**
   *  首页
   */
  async index() {
    let data = { name: 'egg' };
    let {ctx} = this
    let res_data = {}
    // let EGG_SESS =  ctx.cookies.get('EGG_SESS')
	let EGG_SESS = ctx.session
	console.log(EGG_SESS,'eggggggggggggggggggggggggggggssssssssssssssssssssssss')
    if(EGG_SESS.hasOwnProperty('userId')&& EGG_SESS.userId != null){
		let userInfo = await  ctx.service.home.home.findUser(EGG_SESS.userId);
		res_data = {
			token:true,
			username:userInfo[0].username,
		}
    } else {
		res_data = {
			token:false
		}
    }

    await this.ctx.render('front/home/index', res_data);
    // this.ctx.body = 'hi, egg';
  }

  /**
   *  登录
   */
  async login(){
	let data = { name: 'egg' };
	
    await this.ctx.render('front/login/login', data);
  }

	async logOut(){
		let {ctx} = this
			ctx.session = null
			let data = {
				status:'2000',
				message:'退出成功',
				data:null
			}
		ctx.body = data
	}
  /**
   *  登录数据提交
   *   @email
   *   @password 
   */
  async loginPost(){
    let {ctx} = this
    let userParmas = {
      email:ctx.request.body.email,
      password:getSha1(ctx.request.body.password)
    }
    let data = {}
    let userResult = await ctx.service.home.home.findUser(userParmas.email);
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
  async register(){
    let data = { name: 'egg' };
    await this.ctx.render('front/login/register', data);
  }
  /**
   *  注册提交
   */
  async register_post(){
    let {ctx} = this;
      let userParmas = {
        username:ctx.request.body.username,
        email:ctx.request.body.email,
        password:getSha1(ctx.request.body.password)
      }
      const userResult = await ctx.service.home.home.findEmail(userParmas.email);
      let data = {}
      if(Array.isArray(userResult)&&userResult.length<=0){
        const result =  await ctx.service.home.home.created(userParmas)  
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
}

module.exports = HomeController;
