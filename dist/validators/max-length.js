"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
function maxLength(options) {
    const { max } = options;
    return async (field, value) => {
        if (value.length <= max) {
            return value;
        }
        throw new validation_error_1.ValidationError(`${field} must be no longer than ${max}.`);
    };
}
exports.maxLength = maxLength;
//# sourceMappingURL=max-length.js.map