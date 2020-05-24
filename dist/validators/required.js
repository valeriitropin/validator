"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
function required(options = {}) {
    const { emptyValues = [undefined, null, ''], message = '{field} is required.', } = options;
    return async (field, value, args) => {
        if (emptyValues.includes(value)) {
            throw new validation_error_1.ValidationError(args.format(message, { field }));
        }
        return value;
    };
}
exports.required = required;
//# sourceMappingURL=required.js.map