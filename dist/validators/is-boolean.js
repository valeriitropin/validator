"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
async function isBoolean(field, value) {
    if (typeof value === 'boolean') {
        return value;
    }
    throw new validation_error_1.ValidationError(`${field} expected to be a boolean.`);
}
exports.isBoolean = isBoolean;
//# sourceMappingURL=is-boolean.js.map