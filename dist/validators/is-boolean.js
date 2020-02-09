"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
function isBoolean(options = {}) {
    const { message = '{field} expected to be a boolean.' } = options;
    return async (field, value, args) => {
        if (typeof value === 'boolean') {
            return value;
        }
        throw new validation_error_1.ValidationError(args.format(message, { field }));
    };
}
exports.isBoolean = isBoolean;
//# sourceMappingURL=is-boolean.js.map