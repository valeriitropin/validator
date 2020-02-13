"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("../functions");
const validation_error_1 = require("../validation.error");
function object(rules) {
    return async (field, value, args) => {
        const result = {};
        const validationErrors = {};
        const errors = [];
        const promises = [];
        for (const _field of Object.keys(rules)) {
            const promise = functions_1.buildChain(_field, value[_field], rules[_field], args)
                .then(_value => result[_field] = _value)
                .catch(error => {
                if (error instanceof validation_error_1.ValidationError) {
                    return validationErrors[_field] = error.messages;
                }
                if (error instanceof Error) {
                    return errors.push(error);
                }
                result[_field] = error;
            });
            promises.push(promise);
        }
        return Promise.all(promises)
            .then(() => functions_1.resultHandler(result, validationErrors, errors));
    };
}
exports.object = object;
//# sourceMappingURL=object.js.map