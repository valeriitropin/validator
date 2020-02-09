"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
function maxLength(options) {
    const { max, message = '{field} must be no longer than {max}.', } = options;
    return async (field, value, args) => {
        if (value.length <= max) {
            return value;
        }
        throw new validation_error_1.ValidationError(args.format(message, { field, max }));
    };
}
exports.maxLength = maxLength;
//# sourceMappingURL=max-length.js.map