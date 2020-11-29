"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
function inArray(options) {
    const { values, name = 'inArray' } = options;
    return async (field, value, args) => {
        if (values.includes(value)) {
            return value;
        }
        throw new types_1.ValidationError(args.format(name, field, {}));
    };
}
exports.inArray = inArray;
//# sourceMappingURL=in-array.js.map