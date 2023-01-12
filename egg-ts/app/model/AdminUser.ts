module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const AdminUserSchema = new Schema({
        username: {type: String},
        password: {
            type: String,
            select: false,
            set(val) {
                return require('bcrypt').hashSync(val, 10);
            }
        },
        createdAt: {type: Date, default: Date.now},
        updatedAt: {type: Date, default: Date.now}
    })
    return mongoose.model('AdminUser', AdminUserSchema);
}

