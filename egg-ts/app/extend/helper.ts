module.exports = {
    //验证密码
    bcompare(password, hash) {
        return require('bcrypt').compareSync(password, hash);
    },
    //生成token
    jwtSign(payload, secret) {
        return require('jsonwebtoken').sign(payload, secret);
    },

}