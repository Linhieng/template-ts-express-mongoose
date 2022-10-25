"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const file_stream_rotator_1 = __importDefault(require("file-stream-rotator"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const util_1 = __importDefault(require("util"));
const base_1 = require("../util/base");
function myLog() {
    // debug 写入文件, info 只输出到控制台
    globalThis.console.debug = function (...args) {
        const data = util_1.default.format.apply(null, args) + '\n';
        fs_1.default.appendFileSync('log/my-debug.log', (0, base_1.formatDate)(new Date()) + ' ' + data);
    };
    globalThis.console.log = function (...args) {
        const data = util_1.default.format.apply(null, args) + '\n';
        fs_1.default.appendFileSync('log/my-log.log', (0, base_1.formatDate)(new Date()) + ' ' + data);
        process.stdout.write(data);
    };
    globalThis.console.error = function (...args) {
        const data = util_1.default.format.apply(null, args) + '\n';
        fs_1.default.appendFileSync('log/my-error.log', (0, base_1.formatDate)(new Date()) + ' ' + data);
        process.stdout.write(data);
    };
}
function initLog(app) {
    const accessLogStream = file_stream_rotator_1.default.getStream({
        filename: path_1.default.join('log', '%DATE%.log'),
        frequency: 'daily',
        verbose: false,
    });
    // setup the logger
    app.use((0, morgan_1.default)('combined', { stream: accessLogStream }));
    myLog();
}
exports.default = initLog;
