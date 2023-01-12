import {Service} from "egg";

export default class Item extends Service {
    //获取所有信息
    public async index() {
        const {ctx} = this;
        return ctx.model.Item.find();
    }

    //创建信息
    public async create(item) {
        const {ctx} = this;
        return await ctx.model.Item.create(item);   //创建一条
    }

    //删除信息
    public async destroy(id) {
        const {ctx} = this;
        return ctx.model.Item.deleteOne({_id: id}); //删除一条
    }

    //更新信息
    public async update(id, item) {
        const {ctx} = this;
        return ctx.model.Item.updateOne({_id: id}, item); //更新一条
    }

    //获取信息
    public async show(id) {
        const {ctx} = this;
        return ctx.model.Item.findById(id);
    }
}