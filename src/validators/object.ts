import { buildChain, resultHandler } from '../functions';
import { ValidatorArguments, ValidationError, ValidationFunction } from '../types';

export function object(rules: {[key: string]: ValidationFunction[]}, options: ObjectOptions = {}): ValidationFunction {
  const {labels = {}} = options;

  return async(field: string | number, value, args: ValidatorArguments) => {
    const result = {};
    const validationErrors = {};
    const errors: Error[] = [];
    const promises: Promise<any>[] = [];

    for (const _field of Object.keys(rules)) {
      const _args = {...args, context: value, label: labels[_field]};
      const promise = buildChain(_field, value[_field], rules[_field], _args)
        .then(_value => result[_field] = _value)
        .catch(error => {
          if (error instanceof ValidationError) {
            return validationErrors[_field] = error.messages;
          }

          if (error instanceof Error) {
            return errors.push(error);
          }

          if (error !== undefined) {
            result[_field] = error;
          }
        });
      promises.push(promise);
    }

    return Promise.all(promises)
      .then(() => resultHandler(result, validationErrors, errors));
  };
}

export interface ObjectOptions {
  labels?: {[key: string]: string};
}
