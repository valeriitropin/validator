import { ValidationError } from './validation.error';

export type ValidationFunction = (field: string | number, value: any, args?: any) => Promise<any>;

export function buildChain(field: string | number, value: any, rules: ValidationFunction[], args?: any): Promise<any> {
  let promise = Promise.resolve(value);
  for (const rule of rules) {
    promise = promise.then(_value => rule(field, _value, args));
  }
  return promise;
}

export async function resultHandler(result: any, validationErrors: { [key: string]: string }, errors: Error[]) {
  if (errors.length) {
    return Promise.reject(errors);
  }
  if (Object.keys(validationErrors).length > 0) {
    return Promise.reject(new ValidationError(validationErrors));
  }
  return Promise.resolve(result);
}

export function format(template: string, values: {[key: string]: any}) {
  let message: string = template;
  for (const key of Object.keys(values)) {
    message = message.replace(new RegExp('{' + key + '}', 'g'), values[key]);
  }

  return message;
}
