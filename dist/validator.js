"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("./functions");
const validators_1 = require("./validators");
async function validateObject(data, rules, options = {}) {
    const args = {
        context: data,
        format: options.format || functions_1.format,
    };
    validators_1.isObject()('input', data, args);
    return validators_1.object(rules)('input', data, args);
}
exports.validateObject = validateObject;
async function validateEach(data, rules, options = {}) {
    const args = {
        context: data,
        format: options.format || functions_1.format,
    };
    await validators_1.isArray()('input', data, args);
    return validators_1.each(rules)('input', data, args);
}
exports.validateEach = validateEach;
async function validateArray(data, rules, options = {}) {
    const args = {
        context: data,
        format: options.format || functions_1.format,
    };
    await validators_1.isArray()('input', data, args);
    return validators_1.array(rules)('input', data, args);
}
exports.validateArray = validateArray;
//# sourceMappingURL=validator.js.map