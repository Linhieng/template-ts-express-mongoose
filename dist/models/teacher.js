"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EduTeacher = void 0;
const mongoose_1 = require("mongoose");
exports.EduTeacher = (0, mongoose_1.model)('edu_teachers', new mongoose_1.Schema({
    id: { type: mongoose_1.Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    intro: { type: String, required: true },
    career: { type: String, required: true },
    level: { type: Number, required: true },
    avatar: { type: String, required: false, default: 'https://pic1.imgdb.cn/item/6289832b0947543129a9afcc.png' },
    sort: { type: Number, required: true },
    is_deleted: { type: Boolean, required: true },
    gmt_create: { type: Date, required: true },
    gmt_modified: { type: Date, required: false }, // 更新时间
}));
