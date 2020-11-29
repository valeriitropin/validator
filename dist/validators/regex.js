"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("../validation.error");
function regex(options) {
    const { pattern, name = 'regex' } = options;
    return async (field, value, args) => {
        if (value.match(pattern)) {
            return value;
        }
        throw new validation_error_1.ValidationError(args.format(name, field, {}));
    };
}
exports.regex = regex;
//# sourceMappingURL=regex.js.map