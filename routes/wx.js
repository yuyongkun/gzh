const router = require('koa-router')();
const util = require('../common/util');
const wxConfig = require('../config/wx');
// 获得access_token//参考https://blog.csdn.net/zzwwjjdj1/article/details/52222748
const url=`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${wxConfig.appid}&secret=${wxConfig.appsecret}`;
util.request({url,json:true}).then(data=>{
console.log(data);
});
module.exports = router;