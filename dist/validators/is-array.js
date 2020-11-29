"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
function isArray(options = {}) {
    const { name = 'isArray' } = options;
    return async (field, value, args) => {
        if (Array.isArray(value)) {
            return value;
        }
        throw new types_1.ValidationError(args.format(name, field, {}));
    };
}
exports.isArray = isArray;
//# sourceMappingURL=is-array.js.map