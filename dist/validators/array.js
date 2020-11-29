"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("../functions");
const types_1 = require("../types");
function array(rules) {
    return async (field, value, args) => {
        const result = [];
        const validationErrors = {};
        const errors = [];
        const promises = [];
        const _args = Object.assign({}, args, { context: value });
        rules.forEach((_rules, index) => {
            const promise = functions_1.buildChain(index, value[index], _rules, _args)
                .then(validatedValue => result[index] = validatedValue)
                .catch(error => {
                if (error instanceof types_1.ValidationError) {
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
exports.array = array;
//# sourceMappingURL=array.js.map