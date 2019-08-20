"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = require("./validation.error");
const functions_1 = require("./functions");
class Validators {
    static required(options = {}) {
        const { continueIfEmpty = false, stopOnEmpty = false, emptyValues = [undefined, null, ''], } = options;
        return async (field, value) => {
            const isEmpty = emptyValues.includes(value);
            if (isEmpty && stopOnEmpty) {
                throw undefined;
            }
            if (isEmpty && !continueIfEmpty) {
                throw new validation_error_1.ValidationError(`${field} is required.`);
            }
            return value;
        };
    }
    static isNumber(options = {}) {
        const { integer = false } = options;
        return async (field, value) => {
            if (typeof value !== 'number') {
                throw new validation_error_1.ValidationError(`${field} expected to be a number.`);
            }
            if (integer && !Number.isInteger(value)) {
                throw new validation_error_1.ValidationError(`${field} expected to be an integer number.`);
            }
            return value;
        };
    }
    static async isString(field, value) {
        if (typeof value === 'string') {
            return value;
        }
        throw new validation_error_1.ValidationError(`${field} expected to be a string.`);
    }
    static async isBoolean(field, value) {
        if (typeof value === 'boolean') {
            return value;
        }
        throw new validation_error_1.ValidationError(`${field} expected to be a boolean.`);
    }
    static async isArray(field, value) {
        if (Array.isArray(value)) {
            return value;
        }
        throw new validation_error_1.ValidationError(`${field} expected to be an array.`);
    }
    static async isObject(field, value) {
        if (value !== null && !Array.isArray(value) && typeof value === 'object') {
            return value;
        }
        throw new validation_error_1.ValidationError(`${field} expected to be an object.`);
    }
    static len(length) {
        return async (field, value) => {
            if (value.length === length) {
                return value;
            }
            throw new validation_error_1.ValidationError(`${field} length must be equal ${length}.`);
        };
    }
    static minLength(min) {
        return async (field, value) => {
            if (value.length >= min) {
                return value;
            }
            throw new validation_error_1.ValidationError(`${field} must be no shorter than ${min}.`);
        };
    }
    static maxLength(max) {
        return async (field, value) => {
            if (value.length <= max) {
                return value;
            }
            throw new validation_error_1.ValidationError(`${field} must be no longer than ${max}.`);
        };
    }
    static min(min) {
        return async (field, value) => {
            if (value >= min) {
                return value;
            }
            throw new validation_error_1.ValidationError(`${field} must be no less than ${min}.`);
        };
    }
    static max(max) {
        return async (field, value) => {
            if (value <= max) {
                return value;
            }
            throw new validation_error_1.ValidationError(`${field} must be no greater than ${max}.`);
        };
    }
    static default(defaultValue) {
        return async (field, value) => {
            if (value === undefined) {
                return defaultValue;
            }
            return value;
        };
    }
    static in(values) {
        return async (field, value) => {
            if (values.includes(value)) {
                return value;
            }
            throw new validation_error_1.ValidationError(`${field} is not in ${values}.`);
        };
    }
    static each(rules) {
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
    static object(rules) {
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
                        errors.push(error);
                    }
                });
                promises.push(promise);
            }
            return Promise.all(promises)
                .then(() => functions_1.resultHandler(result, validationErrors, errors));
        };
    }
}
exports.Validators = Validators;
//# sourceMappingURL=validators.js.map