import {EggAppConfig, EggAppInfo, PowerPartial} from 'egg';

export default (appInfo: EggAppInfo) => {
    const config = {} as PowerPartial<EggAppConfig>;


    // override config from framework / plugin
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1673485164100_4380';

    // add your egg config in here
    config.middleware = [];
    //mongoose
    config.mongoose = {
        url: 'mongodb://127.0.0.1/node-vue-moba',
        options: {},
    }

    //csrf
    config.security = {
        csrf: {
            enable: false,
            ignoreJSON: true
        },
        domainWhiteList: ['*']
    }

    //jwt
    config.jwt = {
        secret: '123456'
    }

    //cors
    config.cors = {
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    }

    //文件上传
    config.multipart = {
        mode: 'stream',
    }

    // add your special config in here
    const bizConfig = {
        sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    };

    // the return config will combines to EggAppConfig
    return {
        ...config,
        ...bizConfig,
    };
};
