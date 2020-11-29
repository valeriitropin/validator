"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
function regex(options) {
    const { pattern, name = 'regex' } = options;
    return async (field, value, args) => {
        if (value.match(pattern)) {
            return value;
        }
        throw new types_1.ValidationError(args.format(name, field, {}));
    };
}
exports.regex = regex;
//# sourceMappingURL=regex.js.map