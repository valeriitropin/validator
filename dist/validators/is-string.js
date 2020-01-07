"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
function isString(options = {}) {
    return async (field, value) => {
        if (typeof value === 'string') {
            return value;
        }
        const message = options.message || `${field} expected to be a string.`;
        throw new validation_error_1.ValidationError(message);
    };
}
exports.isString = isString;
//# sourceMappingURL=is-string.js.map