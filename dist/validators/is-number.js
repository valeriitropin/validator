"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
function isNumber(options = {}) {
    const { integer = false, name } = options;
    return async (field, value, args) => {
        if (typeof value !== 'number') {
            throw new types_1.ValidationError(args.format(name || 'isNumber', field, { integer }));
        }
        if (integer && !Number.isInteger(value)) {
            throw new types_1.ValidationError(args.format(name || 'isIntegerNumber', field, { integer }));
        }
        return value;
    };
}
exports.isNumber = isNumber;
//# sourceMappingURL=is-number.js.map