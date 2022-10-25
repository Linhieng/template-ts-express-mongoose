"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const addTeacher_1 = __importDefault(require("../controllers/teacher/addTeacher"));
const getAllTeacher_1 = __importDefault(require("../controllers/teacher/getAllTeacher"));
const router = (0, express_1.Router)();
router.get('/findAll', getAllTeacher_1.default);
router.post('/addTeacher', addTeacher_1.default);
exports.default = router;
