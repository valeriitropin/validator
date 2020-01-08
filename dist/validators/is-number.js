"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("../functions");
const validation_error_1 = require("../validation.error");
function isNumber(options = {}) {
    const { integer = false, message = '{field} expected to be a number.', intMessage = '{field} expected to be an integer number.', } = options;
    return async (field, value) => {
        if (typeof value !== 'number') {
            throw new validation_error_1.ValidationError(functions_1.format(message, { field }));
        }
        if (integer && !Number.isInteger(value)) {
            throw new validation_error_1.ValidationError(functions_1.format(intMessage, { field }));
        }
        return value;
    };
}
exports.isNumber = isNumber;
//# sourceMappingURL=is-number.js.map