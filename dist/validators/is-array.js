"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
function isArray(options = {}) {
    const { name = 'isArray' } = options;
    return async (field, value, args) => {
        if (Array.isArray(value)) {
            return value;
        }
        throw new validation_error_1.ValidationError(args.format(name, field, {}));
    };
}
exports.isArray = isArray;
//# sourceMappingURL=is-array.js.map