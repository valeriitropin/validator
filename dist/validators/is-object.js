"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
async function isObject(field, value) {
    if (value !== null && !Array.isArray(value) && typeof value === 'object') {
        return value;
    }
    throw new validation_error_1.ValidationError(`${field} expected to be an object.`);
}
exports.isObject = isObject;
//# sourceMappingURL=is-object.js.map