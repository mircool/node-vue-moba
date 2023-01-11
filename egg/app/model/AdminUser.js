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
        }
    });
    return mongoose.model('AdminUser', AdminUserSchema);
}