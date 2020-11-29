"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
function required(options = {}) {
    const { emptyValues = [undefined, null, ''], name = 'required' } = options;
    return async (field, value, args) => {
        if (emptyValues.includes(value)) {
            throw new types_1.ValidationError(args.format(name, field, {}));
        }
        return value;
    };
}
exports.required = required;
//# sourceMappingURL=required.js.map