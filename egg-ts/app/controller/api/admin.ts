import {Controller} from 'egg';

export default class AdminController extends Controller {
    public async login() {
        const {ctx} = this;
        const {username, password} = ctx.request.body;
        const user = await ctx.service.admin.login(username, password); // 调用 Service 进行业务处理
        if (user) {
            ctx.body = {
                token: user.token,
                username: user.username,
            };
        }
    }
}
