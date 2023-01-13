module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const CategorySchema = new Schema({
        name: {type: String},
        parent: {type: Schema.Types.ObjectId, ref: 'Category'},
        createdAt: {type: Date, default: Date.now},
        updatedAt: {type: Date, default: Date.now}
    })

    return mongoose.model('Category', CategorySchema);
}