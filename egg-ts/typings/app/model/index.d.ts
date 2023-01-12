// This file is created by egg-ts-helper@1.34.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdminUser from '../../../app/model/AdminUser';
import ExportItem from '../../../app/model/Item';

declare module 'egg' {
  interface IModel {
    AdminUser: ReturnType<typeof ExportAdminUser>;
    Item: ReturnType<typeof ExportItem>;
  }
}
