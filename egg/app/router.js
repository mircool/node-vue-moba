'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {router, controller} = app;
    router.get('/', controller.home.index);
    //后台登录
    router.post('/api/admin/login', controller.api.admin.login);
    //restful接口
    router.resources('admin', '/api/rest', controller.api.rest);
};
