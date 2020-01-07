"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
function length(length) {
    return async (field, value) => {
        if (value.length === length) {
            return value;
        }
        throw new validation_error_1.ValidationError(`${field} length must be equal ${length}.`);
    };
}
exports.length = length;
//# sourceMappingURL=length.js.map