module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const CategorySchema = new Schema({
        name: {type: String},
        parent: {type: Schema.Types.ObjectId, ref: 'Category'},
        createdAt: {type: Date, default: Date.now},
        updatedAt: {type: Date, default: Date.now}
    })

    CategorySchema.virtual('children', {
        localField: '_id',
        foreignField: 'parent',
        justOne: false,
        ref: 'Category'
    })

    return mongoose.model('Category', CategorySchema);
}