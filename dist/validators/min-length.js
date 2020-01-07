"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
function minLength(options) {
    const { min } = options;
    return async (field, value) => {
        if (value.length >= min) {
            return value;
        }
        throw new validation_error_1.ValidationError(`${field} must be no shorter than ${min}.`);
    };
}
exports.minLength = minLength;
//# sourceMappingURL=min-length.js.map