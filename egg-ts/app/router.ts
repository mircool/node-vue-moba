import {Application} from 'egg';

export default (app: Application) => {
    const {controller, router} = app;

    router.get('/', controller.home.index);
    router.post('/api/admin/login', controller.api.admin.login);    //登录
    // router.get('/api/rest/items', controller.api.item.list);    //获取所有信息
    // router.post('/api/rest/items', controller.api.item.create); //创建信息
    // router.delete('/api/rest/items/:id', controller.api.item.delete);   //删除信息
    // router.put('/api/rest/items/:id', controller.api.item.update);  //更新信息
    // router.get('/api/rest/items/:id', controller.api.item.show);    //获取信息
    router.resources('items', '/api/rest/items', controller.api.item);    //资源路由
    router.post('/api/uploads', controller.api.upload.index);    //文件上传
};
