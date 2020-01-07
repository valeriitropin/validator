"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
async function isString(field, value) {
    if (typeof value === 'string') {
        return value;
    }
    throw new validation_error_1.ValidationError(`${field} expected to be a string.`);
}
exports.isString = isString;
//# sourceMappingURL=is-string.js.map