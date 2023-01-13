module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const ArticleSchema = new Schema({
        title: {type: String},
        body: {type: String},
        categories: [{type: Schema.Types.ObjectId, ref: 'Category'}],   //关联分类
        createdAt: {type: Date, default: Date.now},
        updatedAt: {type: Date, default: Date.now}
    })

    return mongoose.model('Article', ArticleSchema);
}
