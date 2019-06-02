import { ValidationError } from './validation.error';
import { buildChain, ValidationFunction, resultHandler } from './functions';

export class Validators {
    static required(continueIfEmpty = false): ValidationFunction {
      return async(field: string | number, value: any) => {
        if (value === undefined && !continueIfEmpty) {
          throw new ValidationError(`${field} is required.`);
        }
        return value;
      };
    }
  
    // Types
    static async isNumber(field: string | number, value: any) {
      if (typeof value === 'number') {
        return value;
      }
      throw new ValidationError(`${field} expected to be a number.`);
    }

    static async isString(field: string | number, value: any) {
      if (typeof value === 'string') {
        return value;
      }
      throw new ValidationError(`${field} expected to be a string.`);
    }

    static async isBoolean(field: string | number, value: any) {
      if (typeof value === 'boolean') {
        return true;
      }

      throw new ValidationError(`${field} expected to be a boolean.`);
    }

    static async isArray(field: string | number, value: any) {
      if (Array.isArray(value)) {
        return value;
      }
      throw new ValidationError(`${field} expected to be an array.`);
    }

    static async isObject(field: string, value: any) {
      if (value !== null && (typeof value === 'function' || typeof value === 'object')) {
        return value;
      }
      throw new ValidationError(`${field} expected to be an object.`);
    }

    static minLength(min: number) {
      return async(field: string, value: string) => {
        if (value.length >= min) {
          return value;
        }
        throw new ValidationError(`${field} must be no shorter than ${min}.`);
      }
    }

    static maxLength(max: number) {
      return async(field: string, value: string) => {
        if (value.length <= max) {
          return value;
        }
        throw new ValidationError(`${field} must be no longer than ${max}.`);
      }
    }

    static min(min: number) {
      return async(field: string, value: number) => {
        if (value >= min) {
          return value;
        }
        throw new ValidationError(`${field} must be no less than ${min}.`);
      }
    }

    static max(max: number) {
      return async(field: string, value: number) => {
        if (value <= max) {
          return value;
        }
        throw new ValidationError(`${field} must be no greater than ${max}.`);
      }
    }

    static default(defaultValue: any): ValidationFunction {
      return async(field, value) => {
        if (value === undefined) {
          return defaultValue;
        }
        return value;
      }
    }

    static in(values: any[]) {
      return async(field: string, value: any) => {
        if (values.includes(value)) {
          return value;
        }
        throw new ValidationError(`${field} is not in ${values}.`);
      }
    }

    static each(rules: ValidationFunction[]): ValidationFunction {
      return async (field, value, args) => {
        const result: any[] = [];
        const validationErrors: {} = {};
        const errors: Error[] = [];
        const promises: Promise<any>[] = [];
  
        value.forEach((_value: any, index: number) => {
          const promise = buildChain(index, _value, rules, args)
            .then(validatedValue => result[index] = validatedValue)
            .catch(error => {
              if (error instanceof ValidationError) {
                return validationErrors[index] = error.messages;
              }
  
              errors.push(error);
            });
          promises.push(promise);
        });
  
        return Promise.all(promises)
          .then(() => resultHandler(result, validationErrors, errors));
      };
    }

    static object(rules: { [key: string]: ValidationFunction[] }): ValidationFunction {
      return async (field, value, args) => {
        const result = {};
        const validationErrors = {};
        const errors: Error[] = [];
        const promises: Promise<any>[] = [];
  
        for (const _field of Object.keys(rules)) {
          const promise = buildChain(_field, value[_field], rules[_field], args)
            .then(_value => result[_field] = _value)
            .catch(error => {
              if (error instanceof ValidationError) {
                return validationErrors[_field] = error.messages;
              }
  
              errors.push(error);
            });
          promises.push(promise);
        }
  
        return Promise.all(promises)
          .then(() => resultHandler(result, validationErrors, errors));
      };
    }
}
    