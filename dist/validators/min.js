"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
function min(min) {
    return async (field, value) => {
        if (value >= min) {
            return value;
        }
        throw new validation_error_1.ValidationError(`${field} must be no less than ${min}.`);
    };
}
exports.min = min;
//# sourceMappingURL=min.js.map