"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function optional() {
    return async (field, value) => {
        if (value === undefined) {
            throw undefined;
        }
        return value;
    };
}
exports.optional = optional;
//# sourceMappingURL=optional.js.map