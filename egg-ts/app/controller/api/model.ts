import {Controller} from "egg";

export default class ModelController extends Controller {
    //获取所有信息
    public async index() {
        const {ctx} = this;
        console.log("index:", ctx);
        ctx.body = await ctx.service.model.index();
    }

    //创建信息
    public async create() {
        const {ctx} = this;
        ctx.body = await ctx.service.model.create(ctx.request.body);
    }

    //删除信息
    public async destroy() {
        const {ctx} = this;
        ctx.body = await ctx.service.model.destroy(ctx.params.id);
    }

    //更新信息
    public async update() {
        const {ctx} = this;
        ctx.body = await ctx.service.model.update(ctx.params.id, ctx.request.body);
    }

    //获取信息
    public async show() {
        const {ctx} = this;
        ctx.body = await ctx.service.model.show(ctx.params.id);
    }
}