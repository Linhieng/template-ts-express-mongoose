"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function initGlobalVas() {
    Object.defineProperty(globalThis, 'SUCCESS', {
        value: 20000,
        writable: false,
    });
    Object.defineProperty(globalThis, 'ERROR', {
        value: 20001,
        writable: false,
    });
}
exports.default = initGlobalVas;
