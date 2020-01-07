"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
function regex(options) {
    const { pattern, message } = options;
    return async (field, value) => {
        if (value.match(pattern)) {
            return value;
        }
        const _message = message || `${field} is not valid.`;
        throw new validation_error_1.ValidationError(_message);
    };
}
exports.regex = regex;
//# sourceMappingURL=regex.js.map