const assert = require("http-assert");
const jwt = require("jsonwebtoken");
const AdminUser = require("../models/AdminUser");
require('express-async-errors');    //捕获异步错误关键代码
module.exports = option => {
    return async (req, res, next) => {
        const token = String(req.headers.authorization || '').split(' ').pop()  //获取请求头中的token
        assert(token, 401, '请先登录')
        const {id} = jwt.verify(token, req.app.get('secret'))  //解析token
        assert(id, 401, '请先登录')
        req.user = await AdminUser.findById(id)
        assert(req.user, 401, '请先登录')
        await next()
    }
}