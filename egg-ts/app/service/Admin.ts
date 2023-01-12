import {Service} from "egg";

export default class Admin extends Service {
    public async login(username: string, password: string) {
        const {app, ctx} = this;
        const user = await ctx.model.AdminUser.findOne({username}).select('+password');
        if (!user) {
            ctx.throw(422, '用户不存在');
        }
        const verifyPsw = ctx.helper.bcompare(password, user.password);
        if (!verifyPsw) {
            ctx.throw(422, '密码错误');
        }
        //jwt
        const token = ctx.helper.jwtSign({id: user._id}, app.config.jwt.secret);
        return {token, username: user.username};
    }
}