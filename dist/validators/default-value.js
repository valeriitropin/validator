"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function defaultValue(options) {
    const { defaultValue } = options;
    return async (field, value) => {
        if (value === undefined) {
            return defaultValue;
        }
        return value;
    };
}
exports.defaultValue = defaultValue;
//# sourceMappingURL=default-value.js.map