"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
function inArray(options) {
    const { values, message } = options;
    return async (field, value) => {
        if (values.includes(value)) {
            return value;
        }
        const _message = message || `${field} is not in ${values}.`;
        throw new validation_error_1.ValidationError(_message);
    };
}
exports.inArray = inArray;
//# sourceMappingURL=in-array.js.map