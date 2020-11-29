"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function defaultValue(options) {
    return async (field, value) => {
        if (value === undefined) {
            return options.value;
        }
        return value;
    };
}
exports.defaultValue = defaultValue;
//# sourceMappingURL=default-value.js.map