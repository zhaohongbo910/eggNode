'use strict';

const Controller = require('egg').Controller;

class homeController extends Controller {
  /**
   *  首页
   */
	async indexGET() {
		let data = { name: 'egg' };
		let {ctx} = this
		let res_data = {}
		// let EGG_SESS =  ctx.cookies.get('EGG_SESS')
		const  eggArtice = await ctx.service.articeService.findAll_eggAritce()
		// console.log(eggArtice,'ccccccccccccccccc')

		let EGG_SESS = ctx.session
		console.log(EGG_SESS,'eggggggggggggggggggggggggggggssssssssssssssssssssssss')
		if(EGG_SESS.hasOwnProperty('userId')&& EGG_SESS.userId != null){
			let userInfo = await  ctx.service.userService.findUser(EGG_SESS.userId);
			res_data = {
				token:true,
				username:userInfo[0].username,
				articeResult:eggArtice
			}
		} else {
			res_data = {
				token:false,
				articeResult:eggArtice
			}
		}
		await this.ctx.render('front/home/index', res_data);
	}

	

}

module.exports = homeController;
