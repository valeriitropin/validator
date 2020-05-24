"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function nullable() {
    return async (field, value) => {
        if (value === null) {
            throw value;
        }
        return value;
    };
}
exports.nullable = nullable;
//# sourceMappingURL=nullable.js.map