import {Controller} from "egg";

export default class UploadController extends Controller {
    //文件上传
    public async index() {
        const {ctx} = this;
        const file = ctx.request.files[0];
        const to = 'app/public/uploads/' + file.filename;
        await ctx.service.upload.uploadFile(file.filepath, to);
        ctx.body = {
            url: ctx.origin + '/public/uploads/' + file.filename
        }
    }