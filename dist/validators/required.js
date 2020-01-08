"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("../functions");
const validation_error_1 = require("../validation.error");
function required(options = {}) {
    const { continueIfEmpty = false, stopOnEmpty = false, emptyValues = [undefined, null, ''], message = '{field} is required.', } = options;
    return async (field, value) => {
        const isEmpty = emptyValues.includes(value);
        if (isEmpty && stopOnEmpty) {
            throw undefined;
        }
        if (isEmpty && !continueIfEmpty) {
            throw new validation_error_1.ValidationError(functions_1.format(message, { field }));
        }
        return value;
    };
}
exports.required = required;
//# sourceMappingURL=required.js.map