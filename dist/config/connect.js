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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const default_json_1 = __importDefault(require("./default.json"));
const connectDB = () => {
    const { mongoURI, connectTimeoutMS, keepAliveInitialDelay } = default_json_1.default;
    const connectFun = () => __awaiter(void 0, void 0, void 0, function* () {
        console.debug('reading connect');
        try {
            yield (0, mongoose_1.connect)(mongoURI, { connectTimeoutMS, keepAlive: true, keepAliveInitialDelay });
            console.debug(`Successfully connected to ${mongoURI}`);
        }
        catch (err) {
            console.error('Error connecting to database: ' + err.message);
            process.exit(1);
        }
    });
    connectFun();
    mongoose_1.connection.on('disconnected', connectFun);
    mongoose_1.connection.on('close', () => {
        console.debug('connect close');
    });
    mongoose_1.connection.on('error', () => {
        console.error('connect error');
    });
    mongoose_1.connection.on('connected', () => {
        console.log('Successfully connected');
    });
};
exports.default = connectDB;
