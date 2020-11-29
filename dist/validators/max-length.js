"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
function maxLength(options) {
    const { max, name = 'maxLength' } = options;
    return async (field, value, args) => {
        if (value.length <= max) {
            return value;
        }
        throw new types_1.ValidationError(args.format(name, field, { max }));
    };
}
exports.maxLength = maxLength;
//# sourceMappingURL=max-length.js.map