"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validators_1 = require("./validators");
class Validator {
    async validate(data, rules) {
        await validators_1.Validators.isObject('input', data);
        return validators_1.Validators.object(rules)('input', data, { context: data });
    }
}
exports.Validator = Validator;
//# sourceMappingURL=validator.js.map