"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
function isString(options = {}) {
    const { name = 'isString' } = options;
    return async (field, value, args) => {
        if (typeof value === 'string') {
            return value;
        }
        throw new types_1.ValidationError(args.format(name, field, {}));
    };
}
exports.isString = isString;
//# sourceMappingURL=is-string.js.map