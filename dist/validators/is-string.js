"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
const functions_1 = require("../functions");
function isString(options = {}) {
    const { message = '{field} expected to be a string.' } = options;
    return async (field, value) => {
        if (typeof value === 'string') {
            return value;
        }
        throw new validation_error_1.ValidationError(functions_1.format(message, { field }));
    };
}
exports.isString = isString;
//# sourceMappingURL=is-string.js.map