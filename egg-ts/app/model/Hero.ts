module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const HeroSchema = new Schema({
        name: {type: String},
        avatar: {type: String},
        title: {type: String},
        categories: [{type: Schema.Types.ObjectId, ref: 'Category'}],
        scores: {
            difficult: {type: Number},
            skills: {type: Number},
            attack: {type: Number},
            survive: {type: Number}
        },
        skills: [{
            icon: {type: String},
            name: {type: String},
            description: {type: String},
            tips: {type: String}
        }],
        items1: [{type: Schema.Types.ObjectId, ref: 'Item'}],
        items2: [{type: Schema.Types.ObjectId, ref: 'Item'}],
        usageTips: {type: String},
        battleTips: {type: String},
        teamTips: {type: String},
        createdAt: {type: Date, default: Date.now},
        updatedAt: {type: Date, default: Date.now}
    })
    return mongoose.model('Hero', HeroSchema);
}