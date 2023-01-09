const assert = require("http-assert");
const jwt = require("jsonwebtoken");
const AdminUser = require("../../models/AdminUser");
require('express-async-errors');    //捕获异步错误关键代码
module.exports = app => {
    const express = require('express')
    const router = express.Router({mergeParams: true})

    //添加数据
    router.post('/', async (req, res) => {
        const model = await req.Model.create(req.body)   // req.body is the data sent from the client
        res.send(model)  // send the data back to the client
    })

    //获取列表
    router.get('/', async (req, res) => {
        const queryOptions = {}
        if (req.Model.modelName === 'Category') {   //如果模块名为Category，就添加populate
            queryOptions.populate = 'parent'
        }
        const items = await req.Model.find().setOptions(queryOptions).limit(10)   //获取数据
        res.send(items) //发送数据
    })
    //获取详情
    router.get('/:id', async (req, res) => {
        const model = await req.Model.findById(req.params.id)
        res.send(model)
    })
    //更新数据
    router.put('/:id', async (req, res) => {
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
        res.send(model)
    })

    //删除数据
    router.delete('/:id', async (req, res) => {
        await req.Model.findByIdAndDelete(req.params.id, req.body)
        res.send({
            success: true
        })
    })

    //授权中间件
    const authMiddleware = require('../../middleware/auth')

    //资源类型转换中间件
    const resourceMiddleware = require('../../middleware/resource')

    //通用接口
    app.use('/admin/api/rest/:resource', authMiddleware(), resourceMiddleware(), router)

    //上传图片
    const multer = require('multer')
    const upload = multer({dest: __dirname + '/../../uploads'})  //指定上传文件的目录
    app.post('/admin/api/uploads',authMiddleware(), upload.single('file'), async (req, res) => {
        const file = req.file
        file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file)
    })

    //登录接口
    app.post('/admin/api/login', async (req, res) => {
        const {username, password} = req.body
        //1.根据用户名找用户
        const user = await AdminUser.findOne({username}).select('+password')  //select('+password')表示查询时也要查询password
        assert(user, 422, '用户不存在')
        //2.校验密码
        const isValid = require('bcrypt').compareSync(password, user.password)
        assert(isValid, 422, '密码错误')
        //3.返回token
        const jwt = require('jsonwebtoken')
        const token = jwt.sign({id: user._id}, app.get('secret'))
        res.send({token})
    })

    //错误处理函数
    app.use((err, req, res, next) => {
        res.status(err.statusCode || 500).send({
            message: err.message
        })
    })

}