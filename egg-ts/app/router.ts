import {Application} from 'egg';

export default (app: Application) => {
    const {controller, router} = app;

    router.get('/', controller.home.index);
    router.post('/api/admin/login', controller.api.admin.login);    //登录
    router.post('upload', '/api/upload', controller.api.upload.create);    //文件上传
    router.resources('model', '/api/rest/:model', async (ctx, next) => {
        console.log('ctx:', ctx.model);
        // const modelName = require('inflection').classify(ctx.params.model)    //转换成类名
        // console.log('modelName:', modelName);
        // ctx.model = ctx.model[modelName];
        // console.log('ctx.model:', ctx.model);
        await next();

    }, controller.api.item);    //资源路由

};
