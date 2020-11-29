"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
function length(options) {
    const { length, name = 'length' } = options;
    return async (field, value, args) => {
        if (value.length === length) {
            return value;
        }
        throw new types_1.ValidationError(args.format(name, field, { length }));
    };
}
exports.length = length;
//# sourceMappingURL=length.js.map