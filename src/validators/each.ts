import { buildChain, resultHandler } from '../functions';
import { ValidatorArguments, ValidationError, ValidationFunction } from '../types';

export function each(rules: ValidationFunction[]): ValidationFunction {
  return async(field: string | number, value: any[], args: ValidatorArguments) => {
    const result: any[] = [];
    const validationErrors: {} = {};
    const errors: Error[] = [];
    const promises: Promise<any>[] = [];
    const _args = {...args, context: value};

    value.forEach((_value: any, index: number) => {
      const promise = buildChain(index, _value, rules, _args)
        .then(validatedValue => result[index] = validatedValue)
        .catch(error => {
          if (error instanceof ValidationError) {
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
      .then(() => resultHandler(result, validationErrors, errors));
  };
}
