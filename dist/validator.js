"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validators_1 = require("./validators");
const types_1 = require("./types");
const formatters_1 = require("./formatters");
async function validateObject(data, rules, options = {}) {
    const args = {
        context: data,
        format: options.format || formatters_1.stringFormatter(),
    };
    return validators_1.object({ input: [validators_1.isObject(), validators_1.object(rules)] })('input', { input: data }, args)
        .then(({ input }) => input)
        .catch(errorHandler);
}
exports.validateObject = validateObject;
async function validateEach(data, rules, options = {}) {
    const args = { context: data, format: options.format || formatters_1.stringFormatter() };
    const _rules = [validators_1.isArray()];
    if (options.minLength) {
        _rules.push(validators_1.minLength({ min: options.minLength }));
    }
    if (options.maxLength) {
        _rules.push(validators_1.maxLength({ max: options.maxLength }));
    }
    _rules.push(validators_1.each(rules));
    return validateObject({ input: data }, { input: _rules }, args)
        .then(({ input }) => input)
        .catch(errorHandler);
}
exports.validateEach = validateEach;
async function validateArray(data, rules, options = {}) {
    const args = { context: data, format: options.format || formatters_1.stringFormatter() };
    return validateObject({ input: data }, { input: [validators_1.isArray(), validators_1.array(rules)] }, args)
        .then(({ input }) => input)
        .catch(errorHandler);
}
exports.validateArray = validateArray;
function errorHandler(error) {
    if (error instanceof types_1.ValidationError) {
        throw new types_1.ValidationError(error.messages.input);
    }
    throw error;
}
//# sourceMappingURL=validator.js.map