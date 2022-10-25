"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function initErrorObj() {
    class MyError extends Error {
        constructor(message) {
            super(message);
            this.name = this.constructor.name;
        }
    }
    class ValidationError extends MyError {
    }
    class PropertyRequiredError extends ValidationError {
        constructor(property) {
            super('No property: ' + property);
            this.property = property;
        }
    }
    class PropertySyntaxError extends ValidationError {
        constructor(property) {
            super('Property syntax error: ' + property);
            this.property = property;
        }
    }
    class ReadError extends MyError {
        constructor(message, cause) {
            super(message);
            this.cause = cause;
        }
    }
    Object.assign(globalThis, {
        ReadError,
        MyError,
        ValidationError,
        PropertyRequiredError,
        PropertySyntaxError,
    });
}
exports.default = initErrorObj;
