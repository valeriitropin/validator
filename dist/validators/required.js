"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
function required(options = {}) {
    const { continueIfEmpty = false, stopOnEmpty = false, emptyValues = [undefined, null, ''], message = '{field} is required.', } = options;
    return async (field, value, args) => {
        const isEmpty = emptyValues.includes(value);
        if (isEmpty && stopOnEmpty) {
            throw undefined;
        }
        if (isEmpty && !continueIfEmpty) {
            throw new validation_error_1.ValidationError(args.format(message, { field }));
        }
        return value;
    };
}
exports.required = required;
//# sourceMappingURL=required.js.map