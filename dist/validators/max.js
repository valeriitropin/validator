"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
function max(options) {
    const { max, message } = options;
    return async (field, value) => {
        if (value <= max) {
            return value;
        }
        const _message = message || `${field} must be no greater than ${max}.`;
        throw new validation_error_1.ValidationError(_message);
    };
}
exports.max = max;
//# sourceMappingURL=max.js.map