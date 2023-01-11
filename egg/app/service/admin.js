'use strict';

const {Service} = require('egg');

class AdminService extends Service {
    async login(username, password) {
        const {app, ctx} = this;
        const user = await ctx.model.AdminUser.findOne({username}).select('+password');
        if (!user) {
            ctx.throw(400, '用户不存在');
        }
        const isValid = require('bcrypt').compareSync(password, user.password);
        if (!isValid) {
            ctx.throw(400, '密码错误');
        }
        // 生成token
        const jwt = require('jsonwebtoken')
        const token = jwt.sign({id: user._id}, app.config.jwt.secret);
        return {username, token};
    }
}

module.exports = AdminService;