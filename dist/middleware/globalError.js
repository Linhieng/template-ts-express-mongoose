"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (err, req, res, next) => {
    if (!err) {
        next();
    }
    console.error(err);
    const result = {
        success: false,
        code: ERROR,
        message: err.message,
        data: {},
    };
    res
        .status(500)
        .json(result);
};
