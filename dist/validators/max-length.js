"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
function maxLength(options) {
    const { max, message } = options;
    return async (field, value) => {
        if (value.length <= max) {
            return value;
        }
        const _message = message || `${field} must be no longer than ${max}.`;
        throw new validation_error_1.ValidationError(_message);
    };
}
exports.maxLength = maxLength;
//# sourceMappingURL=max-length.js.map