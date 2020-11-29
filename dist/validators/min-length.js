"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
function minLength(options) {
    const { min, name = 'minLength' } = options;
    return async (field, value, args) => {
        if (value.length >= min) {
            return value;
        }
        throw new types_1.ValidationError(args.format(name, field, { min }));
    };
}
exports.minLength = minLength;
//# sourceMappingURL=min-length.js.map