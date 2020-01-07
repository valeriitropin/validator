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
        value.forEach((_value, index) => {
            const promise = functions_1.buildChain(index, _value, rules, args)
                .then(validatedValue => result[index] = validatedValue)
                .catch(error => {
                if (error instanceof validation_error_1.ValidationError) {
                    return validationErrors[index] = error.messages;
                }
                if (error instanceof Error) {
                    errors.push(error);
                }
            });
            promises.push(promise);
        });
        return Promise.all(promises)
            .then(() => functions_1.resultHandler(result, validationErrors, errors));
    };
}
exports.each = each;
//# sourceMappingURL=each.js.map