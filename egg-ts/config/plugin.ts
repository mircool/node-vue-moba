import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
    //mongoose
    mongoose: {
        enable: true,
        package: 'egg-mongoose',
    },
    //跨域
    cors: {
        enable: true,
        package: 'egg-cors',
    }
};

export default plugin;
