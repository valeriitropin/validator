"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
function inArray(options) {
    const { values, message = '{field} is invalid.', } = options;
    return async (field, value, args) => {
        if (values.includes(value)) {
            return value;
        }
        throw new validation_error_1.ValidationError(args.format(message, { field }));
    };
}
exports.inArray = inArray;
//# sourceMappingURL=in-array.js.map