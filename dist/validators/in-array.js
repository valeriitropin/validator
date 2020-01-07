"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
function inArray(values) {
    return async (field, value) => {
        if (values.includes(value)) {
            return value;
        }
        throw new validation_error_1.ValidationError(`${field} is not in ${values}.`);
    };
}
exports.inArray = inArray;
//# sourceMappingURL=in-array.js.map