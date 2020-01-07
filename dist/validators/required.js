"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
function required(options = {}) {
    const { continueIfEmpty = false, stopOnEmpty = false, emptyValues = [undefined, null, ''], } = options;
    return async (field, value) => {
        const isEmpty = emptyValues.includes(value);
        if (isEmpty && stopOnEmpty) {
            throw undefined;
        }
        if (isEmpty && !continueIfEmpty) {
            throw new validation_error_1.ValidationError(`${field} is required.`);
        }
        return value;
    };
}
exports.required = required;
//# sourceMappingURL=required.js.map