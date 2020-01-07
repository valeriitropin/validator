"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
function isObject(options = {}) {
    return async (field, value) => {
        if (value !== null && !Array.isArray(value) && typeof value === 'object') {
            return value;
        }
        const message = options.message || `${field} expected to be an object.`;
        throw new validation_error_1.ValidationError(message);
    };
}
exports.isObject = isObject;
//# sourceMappingURL=is-object.js.map