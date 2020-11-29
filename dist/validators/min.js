"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
function min(options) {
    const { min, name = 'min' } = options;
    return async (field, value, args) => {
        if (value >= min) {
            return value;
        }
        throw new validation_error_1.ValidationError(args.format(name, field, { min }));
    };
}
exports.min = min;
//# sourceMappingURL=min.js.map