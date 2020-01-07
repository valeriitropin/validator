"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
function isNumber(options = {}) {
    const { integer = false } = options;
    return async (field, value) => {
        if (typeof value !== 'number') {
            throw new validation_error_1.ValidationError(`${field} expected to be a number.`);
        }
        if (integer && !Number.isInteger(value)) {
            throw new validation_error_1.ValidationError(`${field} expected to be an integer number.`);
        }
        return value;
    };
}
exports.isNumber = isNumber;
//# sourceMappingURL=is-number.js.map