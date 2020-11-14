import { buildChain, resultHandler, ValidationFunction } from '../functions';
import { ValidationError } from '../validation.error';
import { ValidatorArguments } from '../validator-arguments';

export function array(rules: ValidationFunction[][]): ValidationFunction {
  return async(field: string | number, value: any[], args: ValidatorArguments) => {
    const result: any[] = [];
    const validationErrors: {} = {};
    const errors: Error[] = [];
    const promises: Promise<any>[] = [];
    const _args = {...args, context: value};

    rules.forEach((_rules: any, index: number) => {
      const promise = buildChain(index, value[index], _rules, _args)
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
