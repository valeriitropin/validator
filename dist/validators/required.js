"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
function required(options = {}) {
    const { continueIfEmpty = false, stopOnEmpty = false, emptyValues = [undefined, null, ''], message, } = options;
    return async (field, value) => {
        const isEmpty = emptyValues.includes(value);
        if (isEmpty && stopOnEmpty) {
            throw undefined;
        }
        if (isEmpty && !continueIfEmpty) {
            const _message = message || `${field} is required.`;
            throw new validation_error_1.ValidationError(_message);
        }
        return value;
    };
}
exports.required = required;
//# sourceMappingURL=required.js.map