const Service = require('egg').Service;

class userService extends Service {

      /**
       *  查询用户  get 查询一条记录 
       *  @get fun  await this.app.mysql.get('posts', { id: 12 }); => SELECT * FROM `posts` WHERE `id` = 12 LIMIT 0, 1;
       *  @select fun 方法支持条件查询与结果的定制。
      */
    async findEmail(email) {
      const  userResult =  await this.app.mysql.select('egg_user', {where:{ email:email},columns:'email'});
      return userResult;
    }

    /**
     * 查找用户所有字段
     * @param {*} option 
     * @param 
     */
    async findUser(email){
      const  userResult =  await this.app.mysql.select('egg_user', {where:{ email:email}}); 
      return userResult;
    }

    /**
     * 创建一条记录
     * 
     */
    async created(option={}) {
        let {username,password,email} = option;
        const result = await this.app.mysql.insert('egg_user', { username: username,password:password,email:email});
        return result
    }
  }
  
module.exports = userService;
