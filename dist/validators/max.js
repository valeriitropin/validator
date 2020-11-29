"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
function max(options) {
    const { max, name = 'max' } = options;
    return async (field, value, args) => {
        if (value <= max) {
            return value;
        }
        throw new types_1.ValidationError(args.format(name, field, { max }));
    };
}
exports.max = max;
//# sourceMappingURL=max.js.map