"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
function isNumber(options = {}) {
    const { integer = false, message, intMessage, } = options;
    return async (field, value) => {
        if (typeof value !== 'number') {
            const _message = message || `${field} expected to be a number.`;
            throw new validation_error_1.ValidationError(_message);
        }
        if (integer && !Number.isInteger(value)) {
            const _intMessage = intMessage || `${field} expected to be an integer number.`;
            throw new validation_error_1.ValidationError(_intMessage);
        }
        return value;
    };
}
exports.isNumber = isNumber;
//# sourceMappingURL=is-number.js.map