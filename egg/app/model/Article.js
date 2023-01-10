module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const ArticleSchema = new Schema({
        title: { type: String },
        categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
        body: { type: String },
    });
    return mongoose.model('Article', ArticleSchema);
}