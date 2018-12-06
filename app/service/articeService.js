

const Service = require('egg').Service;

class articeService extends Service{

    async findAll_eggAritce(){
        const results = await this.app.mysql.select('egg_article');
        return results
    }


}

module.exports = articeService;