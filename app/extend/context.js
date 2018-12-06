
const crypto = require('crypto');

module.exports = {
   async getSha1(str) {
        let sha1 = crypto.createHash("sha1");//定义加密方式:md5不可逆,此处的md5可以换成任意hash加密的方法名称；
        sha1.update(str);
        let s = sha1.digest("hex");  //加密后的值d
        let md5 = crypto.createHash("md5");
        md5.update(s);
        let m = md5.digest("hex");  //加密后的值d
        return m;
      },
    
};