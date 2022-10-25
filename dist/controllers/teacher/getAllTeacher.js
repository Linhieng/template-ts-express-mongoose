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
const teacher_1 = require("../../models/teacher");
const func_1 = require("../func");
const getAllTeacher = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = (0, func_1.factoryR)();
    let status = 500;
    try {
        result.data = yield teacher_1.EduTeacher.find({});
        status = 200;
        result.success = true;
        result.code = SUCCESS;
        result.message = '请求成功';
    }
    catch (e) {
        // TODO: find 可能会抛出异常
        result.message = e.name + ': ' + e.message;
    }
    res
        .status(status)
        .json(result);
});
exports.default = getAllTeacher;
