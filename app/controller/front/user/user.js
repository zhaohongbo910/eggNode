'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {

  async index(){
    this.ctx.body = 'hi, index get';
  }


  async action() {
    // console.log(this.app.middlewares)
    this.ctx.body = 'hi, egg';
  }

}

module.exports = UserController;
