"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
function length(options) {
    const { length, message = '{field} length must be equal {length}.', } = options;
    return async (field, value, args) => {
        if (value.length === length) {
            return value;
        }
        throw new validation_error_1.ValidationError(args.format(message, { field, length }));
    };
}
exports.length = length;
//# sourceMappingURL=length.js.map