import { ValidationError } from '../validation.error';
import { format, ValidationFunction } from '../functions';

export function isString(options: IsStringOptions = {}): ValidationFunction {
  const { message = '{field} expected to be a string.' } = options;

  return async(field: string | number, value: any) => {
    if (typeof value === 'string') {
      return value;
    }

    throw new ValidationError(format(message, { field }));
  }
}

export interface IsStringOptions {
  message? : string;
}
