"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
function min(options) {
    const { min, name = 'min' } = options;
    return async (field, value, args) => {
        if (value >= min) {
            return value;
        }
        throw new types_1.ValidationError(args.format(name, field, { min }));
    };
}
exports.min = min;
//# sourceMappingURL=min.js.map