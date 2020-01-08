"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
const functions_1 = require("../functions");
function min(options) {
    const { min, message = '{field} must be no less than {min}.', } = options;
    return async (field, value) => {
        if (value >= min) {
            return value;
        }
        throw new validation_error_1.ValidationError(functions_1.format(message, { field, min }));
    };
}
exports.min = min;
//# sourceMappingURL=min.js.map