"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
const functions_1 = require("../functions");
function isArray(options = {}) {
    const { message = '{field} expected to be an array.', } = options;
    return async (field, value) => {
        if (Array.isArray(value)) {
            return value;
        }
        throw new validation_error_1.ValidationError(functions_1.format(message, { field }));
    };
}
exports.isArray = isArray;
//# sourceMappingURL=is-array.js.map