const Service = require('egg').Service;

class articeService extends Service{

    async findAll_eggAritce(){
        const results = await this.app.mysql.select('egg_article');
        return results
    }

    async findAll_aritce_byusername(){
        const results = await this.app.mysql.query('SELECT b.*,a.username FROM egg_article b LEFT JOIN egg_user a ON  a.email=b.article_aid')
        return results
    }
}

module.exports = articeService;