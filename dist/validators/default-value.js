"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function defaultValue(defaultValue) {
    return async (field, value) => {
        if (value === undefined) {
            return defaultValue;
        }
        return value;
    };
}
exports.defaultValue = defaultValue;
//# sourceMappingURL=default-value.js.map