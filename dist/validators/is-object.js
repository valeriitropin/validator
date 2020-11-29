"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
function isObject(options = {}) {
    const { name = 'isObject' } = options;
    return async (field, value, args) => {
        if (value !== null && !Array.isArray(value) && typeof value === 'object') {
            return value;
        }
        throw new types_1.ValidationError(args.format(name, field, {}));
    };
}
exports.isObject = isObject;
//# sourceMappingURL=is-object.js.map