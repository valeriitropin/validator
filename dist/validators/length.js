"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
function length(options) {
    const { length, message } = options;
    return async (field, value) => {
        if (value.length === length) {
            return value;
        }
        const _message = message || `${field} length must be equal ${length}.`;
        throw new validation_error_1.ValidationError(_message);
    };
}
exports.length = length;
//# sourceMappingURL=length.js.map