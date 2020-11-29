"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
function isNumber(options = {}) {
    const { integer = false, name } = options;
    return async (field, value, args) => {
        if (typeof value !== 'number') {
            throw new validation_error_1.ValidationError(args.format(name || 'isNumber', field, {}));
        }
        if (integer && !Number.isInteger(value)) {
            throw new validation_error_1.ValidationError(args.format(name || 'isIntegerNumber', field, {}));
        }
        return value;
    };
}
exports.isNumber = isNumber;
//# sourceMappingURL=is-number.js.map