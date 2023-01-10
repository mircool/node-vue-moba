module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const ItemSchema = new Schema({
        name: {type: String},
        icon: {type: String},
    });

    return mongoose.model('Item', ItemSchema);
}