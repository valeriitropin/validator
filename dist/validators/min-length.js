"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
const functions_1 = require("../functions");
function minLength(options) {
    const { min, message = '{field} must be no shorter than {min}.', } = options;
    return async (field, value) => {
        if (value.length >= min) {
            return value;
        }
        throw new validation_error_1.ValidationError(functions_1.format(message, { field, min }));
    };
}
exports.minLength = minLength;
//# sourceMappingURL=min-length.js.map