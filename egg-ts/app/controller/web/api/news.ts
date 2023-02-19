import {Controller} from 'egg';

export default class NewsController extends Controller {
    public async list() {
        const {ctx} = this;
        const parent = await ctx.model.Category.findOne({
            name: '新闻资讯'
        })

        console.log("parent:", parent);

        const cats = await ctx.model.Category.aggregate([
            {$match: {parent: parent._id}},
            {
                $lookup: {
                    from: 'articles',
                    localField: '_id',
                    foreignField: 'categories',
                    as: 'newsList'
                }
            },
            {
                $addFields: {
                    newsList: {$slice: ['$newsList', 5]}
                }
            }
        ])

        const subCats = cats.map(v => v._id)

        cats.unshift(
            {
                name: '热门',
                newsList: await ctx.model.Article.find().where({
                    categories: {$in: subCats}
                }).sort({
                    click: -1
                }).limit(5).lean()
            }
        )

        ctx.body = cats


    }
}