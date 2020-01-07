"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
function isArray(options = {}) {
    return async (field, value) => {
        if (Array.isArray(value)) {
            return value;
        }
        const _message = options.message || `${field} expected to be an array.`;
        throw new validation_error_1.ValidationError(_message);
    };
}
exports.isArray = isArray;
//# sourceMappingURL=is-array.js.map