"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validators_1 = require("./validators");
const formatters_1 = require("./formatters");
async function validateObject(data, rules, options = {}) {
    const args = {
        context: data,
        format: options.format || formatters_1.stringFormatter(),
    };
    validators_1.isObject()('input', data, args);
    return validators_1.object(rules)('input', data, args);
}
exports.validateObject = validateObject;
async function validateEach(data, rules, options = {}) {
    const args = {
        context: data,
        format: options.format || formatters_1.stringFormatter(),
    };
    await validators_1.isArray()('input', data, args);
    return validators_1.each(rules)('input', data, args);
}
exports.validateEach = validateEach;
async function validateArray(data, rules, options = {}) {
    const args = {
        context: data,
        format: options.format || formatters_1.stringFormatter(),
    };
    await validators_1.isArray()('input', data, args);
    return validators_1.array(rules)('input', data, args);
}
exports.validateArray = validateArray;
//# sourceMappingURL=validator.js.map