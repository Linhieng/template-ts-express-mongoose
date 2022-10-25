import { Schema, model } from 'mongoose'

export const EduTeacher = model('edu_teachers', new Schema({
  id: { type: Schema.Types.ObjectId, required: true }, // 讲师ID; 主键
  name: { type: String, required: true }, // 讲师姓名; 外键 uk_name
  intro: { type: String, required: true }, // 讲师简介
  career: { type: String, required: true }, // 一句话说明讲师
  level: { type: Number, required: true }, // 头衔 1高级讲师 2首席讲师
  avatar: { type: String, required: false, default: 'https://pic1.imgdb.cn/item/6289832b0947543129a9afcc.png' }, // 讲师头像
  sort: { type: Number, required: true }, // 排序
  is_deleted: { type: Boolean, required: true }, // 逻辑删除
  gmt_create: { type: Date, required: true }, // 创建时间
  gmt_modified: { type: Date, required: false }, // 更新时间
}))