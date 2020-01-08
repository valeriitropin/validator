"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
const functions_1 = require("../functions");
function length(options) {
    const { length, message = '{field} length must be equal {length}.', } = options;
    return async (field, value) => {
        if (value.length === length) {
            return value;
        }
        throw new validation_error_1.ValidationError(functions_1.format(message, { field, length }));
    };
}
exports.length = length;
//# sourceMappingURL=length.js.map