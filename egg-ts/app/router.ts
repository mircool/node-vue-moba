import {Application} from 'egg';

export default (app: Application) => {
    const {controller, router} = app;

    router.get('/', controller.home.index);
    router.post('/api/admin/login', controller.api.admin.login);    //登录
    router.post('upload', '/api/upload', controller.api.upload.create);    //文件上传
    router.resources('model', '/api/rest/:model', controller.api.model);    //资源路由
};
