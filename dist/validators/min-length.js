"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
function minLength(options) {
    const { min, name = 'minLength' } = options;
    return async (field, value, args) => {
        if (value.length >= min) {
            return value;
        }
        throw new validation_error_1.ValidationError(args.format(name, field, { min }));
    };
}
exports.minLength = minLength;
//# sourceMappingURL=min-length.js.map