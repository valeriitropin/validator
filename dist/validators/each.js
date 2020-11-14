"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("../functions");
const validation_error_1 = require("../validation.error");
function each(rules) {
    return async (field, value, args) => {
        const result = [];
        const validationErrors = {};
        const errors = [];
        const promises = [];
        const _args = Object.assign({}, args, { context: value });
        value.forEach((_value, index) => {
            const promise = functions_1.buildChain(index, _value, rules, _args)
                .then(validatedValue => result[index] = validatedValue)
                .catch(error => {
                if (error instanceof validation_error_1.ValidationError) {
                    return validationErrors[index] = error.messages;
                }
                if (error instanceof Error) {
                    return errors.push(error);
                }
                result[index] = error;
            });
            promises.push(promise);
        });
        return Promise.all(promises)
            .then(() => functions_1.resultHandler(result, validationErrors, errors));
    };
}
exports.each = each;
//# sourceMappingURL=each.js.map