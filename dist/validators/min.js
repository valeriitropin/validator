"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
function min(options) {
    const { min, message } = options;
    return async (field, value) => {
        if (value >= min) {
            return value;
        }
        const _message = message || `${field} must be no less than ${min}.`;
        throw new validation_error_1.ValidationError(_message);
    };
}
exports.min = min;
//# sourceMappingURL=min.js.map