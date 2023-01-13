// This file is created by egg-ts-helper@1.34.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAd from '../../../app/model/Ad';
import ExportAdminUser from '../../../app/model/AdminUser';
import ExportArticle from '../../../app/model/Article';
import ExportCategory from '../../../app/model/Category';
import ExportHero from '../../../app/model/Hero';
import ExportItem from '../../../app/model/Item';

declare module 'egg' {
  interface IModel {
    Ad: ReturnType<typeof ExportAd>;
    AdminUser: ReturnType<typeof ExportAdminUser>;
    Article: ReturnType<typeof ExportArticle>;
    Category: ReturnType<typeof ExportCategory>;
    Hero: ReturnType<typeof ExportHero>;
    Item: ReturnType<typeof ExportItem>;
  }
}
