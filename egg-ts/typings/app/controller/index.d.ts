// This file is created by egg-ts-helper@1.34.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportApiAdmin from '../../../app/controller/api/admin';
import ExportApiItem from '../../../app/controller/api/item';
import ExportApiUpload from '../../../app/controller/api/upload';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    api: {
      admin: ExportApiAdmin;
      item: ExportApiItem;
      upload: ExportApiUpload;
    }
  }
}
