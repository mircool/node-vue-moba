'use strict';

const { Controller } = require('egg');

class AdminController extends Controller {
    async login() {
        const {ctx} = this;
        const {username, password} = ctx.request.body;
        console.log(ctx.request.body)
        const user = await ctx.service.admin.login(username, password);
        if (user) {
            ctx.body = {
                code: 200,
                msg: '登录成功',
                data: user
            };
        }
    }
}

module.exports = AdminController;