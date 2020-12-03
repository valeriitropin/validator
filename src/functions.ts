import { ValidatorArguments, ValidationError, ValidationFunction } from './types';

export function buildChain(
  field: string | number,
  value: any,
  rules: ValidationFunction[],
  args: ValidatorArguments
): Promise<any> {
  let promise = Promise.resolve(value);
  for (const rule of rules) {
    promise = promise.then(_value => rule(field, _value, args));
  }
  return promise;
}

export async function resultHandler(result: any, validationErrors: { [key: string]: string }, errors: Error[]) {
  if (errors.length) {
    return Promise.reject(errors[0]);
  }
  if (Object.keys(validationErrors).length > 0) {
    return Promise.reject(new ValidationError(validationErrors));
  }
  return Promise.resolve(result);
}
