module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const AdSchema = new Schema({
        name: {type: String},
        items: [{
            image: {type: String},
            url: {type: String}
        }],
        createdAt: {type: Date, default: Date.now},
        updatedAt: {type: Date, default: Date.now}
    })
    return mongoose.model('Ad', AdSchema);
}