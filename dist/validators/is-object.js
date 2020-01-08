"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
const functions_1 = require("../functions");
function isObject(options = {}) {
    const { message = '{field} expected to be an object.' } = options;
    return async (field, value) => {
        if (value !== null && !Array.isArray(value) && typeof value === 'object') {
            return value;
        }
        throw new validation_error_1.ValidationError(functions_1.format(message, { field }));
    };
}
exports.isObject = isObject;
//# sourceMappingURL=is-object.js.map