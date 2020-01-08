"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("./validation.error");
function buildChain(field, value, rules, args) {
    let promise = Promise.resolve(value);
    for (const rule of rules) {
        promise = promise.then(_value => rule(field, _value, args));
    }
    return promise;
}
exports.buildChain = buildChain;
async function resultHandler(result, validationErrors, errors) {
    if (errors.length) {
        return Promise.reject(errors);
    }
    if (Object.keys(validationErrors).length > 0) {
        return Promise.reject(new validation_error_1.ValidationError(validationErrors));
    }
    return Promise.resolve(result);
}
exports.resultHandler = resultHandler;
function format(template, values) {
    let message = template;
    for (const key of Object.keys(values)) {
        message = message.replace(new RegExp('{' + key + '}', 'g'), values[key]);
    }
    return message;
}
exports.format = format;
//# sourceMappingURL=functions.js.map