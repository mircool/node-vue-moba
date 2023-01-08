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
    //通用接口
    app.use('/admin/api/rest/:resource', async (req, res, next) => {
        const modelName = require('inflection').classify(req.params.resource)    //转换成类名
        req.Model = require(`../../models/${modelName}`)  //获取模型
        next()
    }, router)

    //上传图片
    const multer = require('multer')
    const upload = multer({dest: __dirname + '/../../uploads'})  //指定上传文件的目录
    app.post('/admin/api/uploads', upload.single('file'), async (req, res) => {
        const file = req.file
        file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file)
    })
}