const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    title: {type: String},
    body: {type: String},
    categories: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Category'}]    // ref: 'Category' 代表关联的是 Category 模型
})

module.exports = mongoose.model('Article', schema)