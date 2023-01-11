'use strict';

const {Service} = require('egg');
const assert = require("http-assert");  //assert is a function to throw an error

class AdminService extends Service {
    async login(username, password) {
        const {app, ctx} = this;
        const user = await ctx.model.AdminUser.findOne({username}).select('+password');
        assert(user, 422, '用户不存在');
        // if (!user) {
        //     ctx.throw(400, '用户不存在');
        // }
        const isValid = require('bcrypt').compareSync(password, user.password);
        assert(isValid, 422, '密码错误');
        // if (!isValid) {
        //     ctx.throw(400, '密码错误');
        // }
        // 生成token
        const jwt = require('jsonwebtoken')
        const token = jwt.sign({id: user._id}, app.config.jwt.secret);
        return {username, token};
    }
}

module.exports = AdminService;