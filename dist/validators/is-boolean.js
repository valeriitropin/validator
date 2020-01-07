"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
function isBoolean(options = {}) {
    return async (field, value) => {
        if (typeof value === 'boolean') {
            return value;
        }
        const _message = options.message || `${field} expected to be a boolean.`;
        throw new validation_error_1.ValidationError(_message);
    };
}
exports.isBoolean = isBoolean;
//# sourceMappingURL=is-boolean.js.map