'use strict';

const {Controller} = require('egg');

class AdminController extends Controller {
    //管理员登录
    async login() {
        const {ctx} = this; //ctx is the context object
        const {username, password} = ctx.request.body;  // get the data sent from the client
        const user = await ctx.service.admin.login(username, password); //调用service层的login方法
        if (user) {
            ctx.body = {
                username: user.username,    //返回用户名
                token: user.token   //返回token
            };
        }
    }
}

module.exports = AdminController;