import { buildChain, resultHandler, ValidationFunction } from '../functions';
import { ValidationError } from '../validation.error';
import { ValidatorArguments } from '../validator-arguments';

export function object(rules: { [key: string]: ValidationFunction[] }): ValidationFunction {
  return async(field: string | number, value, args: ValidatorArguments) => {
    const result = {};
    const validationErrors = {};
    const errors: Error[] = [];
    const promises: Promise<any>[] = [];
    const _args = {...args, context: value};

    for (const _field of Object.keys(rules)) {
      const promise = buildChain(_field, value[_field], rules[_field], _args)
        .then(_value => result[_field] = _value)
        .catch(error => {
          if (error instanceof ValidationError) {
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
      .then(() => resultHandler(result, validationErrors, errors));
  };
}
