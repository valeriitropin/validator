"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("./functions");
const validators_1 = require("./validators");
class Validator {
    async validate(data, rules, options) {
        const args = {
            context: data,
            format: options.format || functions_1.format,
        };
        await validators_1.isObject()('input', data, args);
        return validators_1.object(rules)('input', data, args);
    }
}
exports.Validator = Validator;
//# sourceMappingURL=validator.js.map