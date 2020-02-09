import { ValidationError } from '../validation.error';
import { ValidationFunction } from '../functions';

export function isString(options: IsStringOptions = {}): ValidationFunction {
  const { message = '{field} expected to be a string.' } = options;

  return async(field: string | number, value: any, args) => {
    if (typeof value === 'string') {
      return value;
    }

    throw new ValidationError(args.format(message, { field }));
  }
}

export interface IsStringOptions {
  message? : string;
}
