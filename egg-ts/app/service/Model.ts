import {Service} from "egg";

export default class Model extends Service {
    //获取所有信息
    public async index() {
        const {ctx} = this;
        const modelName = ctx.helper.classify(ctx.params.model);
        return ctx.model[modelName].find().setOptions({populate: 'parent'});
    }

    //创建信息
    public async create(item) {
        const {ctx} = this;
        const modelName = ctx.helper.classify(ctx.params.model);
        return ctx.model[modelName].create(item);
    }

    //删除信息
    public async destroy(id) {
        const {ctx} = this;
        const modelName = ctx.helper.classify(ctx.params.model);
        return ctx.model[modelName].deleteOne({_id: id});
    }

    //更新信息
    public async update(id, item) {
        const {ctx} = this;
        const modelName = ctx.helper.classify(ctx.params.model);
        return ctx.model[modelName].updateOne({_id: id}, item);
    }

    //获取信息
    public async show(id) {
        const {ctx} = this;
        const modelName = ctx.helper.classify(ctx.params.model);
        return ctx.model[modelName].findById(id);
    }
}