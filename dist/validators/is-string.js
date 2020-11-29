"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
function isString(options = {}) {
    const { name = 'isString' } = options;
    return async (field, value, args) => {
        if (typeof value === 'string') {
            return value;
        }
        throw new validation_error_1.ValidationError(args.format(name, field, {}));
    };
}
exports.isString = isString;
//# sourceMappingURL=is-string.js.map