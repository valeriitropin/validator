"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
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
        return Promise.reject(new types_1.ValidationError(validationErrors));
    }
    return Promise.resolve(result);
}
exports.resultHandler = resultHandler;
//# sourceMappingURL=functions.js.map