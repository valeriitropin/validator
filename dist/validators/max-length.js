"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
const functions_1 = require("../functions");
function maxLength(options) {
    const { max, message = '{field} must be no longer than {max}.', } = options;
    return async (field, value) => {
        if (value.length <= max) {
            return value;
        }
        throw new validation_error_1.ValidationError(functions_1.format(message, { field, max }));
    };
}
exports.maxLength = maxLength;
//# sourceMappingURL=max-length.js.map