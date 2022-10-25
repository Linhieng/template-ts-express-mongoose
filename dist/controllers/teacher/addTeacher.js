"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const teacher_1 = require("../../models/teacher");
const func_1 = require("../func");
const teacherProp = {
    name: 'string',
    sort: 'number',
    level: 'number',
    career: 'string',
    intro: 'string',
    avatar: 'string',
};
function checkPropRequired(teacher) {
    Object.keys(teacherProp).forEach(prop => {
        if (Object.prototype.hasOwnProperty.call(teacher, prop) === false) {
            throw new PropertyRequiredError(prop);
        }
    });
}
function checkSyntax(teacher) {
    Object.keys(teacherProp).forEach((prop) => {
        if (typeof teacher[prop] !== teacherProp[prop]) {
            throw new PropertySyntaxError(prop);
        }
    });
}
function checkTeacher(body) {
    try {
        checkPropRequired(body);
        checkSyntax(body);
    }
    catch (e) {
        if (e instanceof PropertyRequiredError) {
            throw new ReadError('缺少必要参数', Object.assign(Object.assign({}, e), { name: e.name, message: e.message }));
        }
        else if (e instanceof PropertySyntaxError) {
            throw new ReadError('参数格式错误', Object.assign(Object.assign({}, e), { name: e.name, message: e.message }));
        }
        else {
            throw e;
        }
    }
}
function add(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const teacher = {
            id: new mongoose_1.Types.ObjectId(),
            name: data.name,
            sort: data.sort,
            level: data.level,
            career: data.career,
            intro: data.intro,
            avatar: data.avatar === '' ? undefined : data.avatar,
            is_deleted: false,
            gmt_create: new Date(),
            gmt_modified: undefined,
        };
        const dTeacher = new teacher_1.EduTeacher(teacher);
        yield dTeacher.save();
    });
}
const addTeacher = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = (0, func_1.factoryR)();
    let status = 500;
    try {
        checkTeacher(req.body);
        yield add(req.body);
        status = 200;
        result.success = true;
        result.code = SUCCESS;
        result.message = '创建成功';
    }
    catch (e) {
        if (e instanceof ReadError) {
            status = 403;
            result.message = e.message;
            result.data = e.cause;
        }
        else if (e instanceof mongoose_1.Error.ValidationError) {
            status = 403;
            result.message = e.name + ': ' + e.message;
            result.data = e.errors;
        }
        else {
            result.message = e.name + ': ' + e.message;
        }
    }
    res
        .status(status)
        .json(result);
});
exports.default = addTeacher;
