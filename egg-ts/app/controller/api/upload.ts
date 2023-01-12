import {Controller} from "egg";
import * as path from "path";
import * as fs from "fs";
// import {pipeline} from "stream/promises";
import crypto from "crypto";

const {pipeline} = require('stream/promises');

export default class UploadController extends Controller {
    public async create() {
        const stream = await this.ctx.getFileStream();  //获取上传的文件流
        const filename = crypto.randomBytes(8).toString('hex') + path.extname(stream.filename).toLowerCase();   //生成文件名
        const target = path.join(this.config.baseDir, 'app/public/uploads', filename);  //生成文件路径
        const writeStream = fs.createWriteStream(target);   //创建可写流
        await pipeline(stream, writeStream);    //文件流写入

        this.ctx.body = {url: 'http://127.0.0.1:7001/public/uploads/' + filename};  //返回文件地址
    }
}