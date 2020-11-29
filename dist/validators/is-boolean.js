"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
function isBoolean(options = {}) {
    const { name = 'isBoolean' } = options;
    return async (field, value, args) => {
        if (typeof value === 'boolean') {
            return value;
        }
        throw new validation_error_1.ValidationError(args.format(name, field, {}));
    };
}
exports.isBoolean = isBoolean;
//# sourceMappingURL=is-boolean.js.map