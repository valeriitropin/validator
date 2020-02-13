import { buildChain, resultHandler, ValidationFunction } from '../functions';
import { ValidationError } from '../validation.error';
import { ValidatorArguments } from '../validator-arguments';

export function each(rules: ValidationFunction[]): ValidationFunction {
  return async(field: string | number, value: any[], args: ValidatorArguments) => {
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
