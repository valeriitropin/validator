"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
function minLength(options) {
    const { min, message } = options;
    return async (field, value) => {
        if (value.length >= min) {
            return value;
        }
        const _message = message || `${field} must be no shorter than ${min}.`;
        throw new validation_error_1.ValidationError(_message);
    };
}
exports.minLength = minLength;
//# sourceMappingURL=min-length.js.map