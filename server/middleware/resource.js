module.exports = option => {
    return async (req, res, next) => {
        const modelName = require('inflection').classify(req.params.resource)    //转换成类名
        req.Model = require(`../models/${modelName}`)  //获取模型
        next()
    }
}