"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
function isObject(options = {}) {
    const { message = '{field} expected to be an object.' } = options;
    return async (field, value, args) => {
        if (value !== null && !Array.isArray(value) && typeof value === 'object') {
            return value;
        }
        throw new validation_error_1.ValidationError(args.format(message, { field }));
    };
}
exports.isObject = isObject;
//# sourceMappingURL=is-object.js.map