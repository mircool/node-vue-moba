'use strict';

/** @type Egg.EggPlugin */
module.exports = {
    // had enabled by egg
    // static: {
    //   enable: true,
    // }
    // mongoose插件
    mongoose: {
        enable: true,
        package: 'egg-mongoose',
    },
    //验证插件
    validate: {
        enable: true,
        package: 'egg-validate',
    },
    //跨域插件
    cors: {
        enable: true,
        package: 'egg-cors',
    }
};
