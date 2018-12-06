'use strict';

const Controller = require('egg').Controller;

class homeController extends Controller {
  /**
   *  首页
   */
	async indexGET() {
		let {ctx,app} = this;
		let res_data = ctx.isLogin;
		let result= await ctx.service.comArticeService.articeService.findAll_aritce_byusername();
		
		res_data.dataResult = result;
        // console.log(res_data)
		await this.ctx.render('AdminLTE/pages/base/base.html', res_data);
	}

	async notFound(){
		let {ctx,app} = this;
		let resData = {};
        await this.ctx.render('AdminLTE/pages/errorPage/404.html',resData);
	}
}

module.exports = homeController;
