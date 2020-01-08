"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("../functions");
const validation_error_1 = require("../validation.error");
function regex(options) {
    const { pattern, message = '{field} is invalid.', } = options;
    return async (field, value) => {
        if (value.match(pattern)) {
            return value;
        }
        throw new validation_error_1.ValidationError(functions_1.format(message, { field }));
    };
}
exports.regex = regex;
//# sourceMappingURL=regex.js.map