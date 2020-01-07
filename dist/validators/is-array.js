"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
async function isArray(field, value) {
    if (Array.isArray(value)) {
        return value;
    }
    throw new validation_error_1.ValidationError(`${field} expected to be an array.`);
}
exports.isArray = isArray;
//# sourceMappingURL=is-array.js.map