module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const ItemSchema = new Schema({
        name: {type: String},
        icon: {type: String},
        createdAt: {type: Date, default: Date.now},
        updatedAt: {type: Date, default: Date.now}
    })
    return mongoose.model('Item', ItemSchema);
}