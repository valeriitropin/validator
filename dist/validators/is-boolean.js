"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
function isBoolean(options = {}) {
    const { name = 'isBoolean' } = options;
    return async (field, value, args) => {
        if (typeof value === 'boolean') {
            return value;
        }
        throw new types_1.ValidationError(args.format(name, field, {}));
    };
}
exports.isBoolean = isBoolean;
//# sourceMappingURL=is-boolean.js.map