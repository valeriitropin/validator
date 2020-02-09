"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
function max(options) {
    const { max, message = '{field} must be no greater than {max}.', } = options;
    return async (field, value, args) => {
        if (value <= max) {
            return value;
        }
        throw new validation_error_1.ValidationError(args.format(message, { field, max }));
    };
}
exports.max = max;
//# sourceMappingURL=max.js.map