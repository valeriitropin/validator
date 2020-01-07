import { ValidationError } from '../validation.error';
import { ValidationFunction } from '../functions';

export function isString(options: IsStringOptions = {}): ValidationFunction {
  return async(field: string | number, value: any) => {
    if (typeof value === 'string') {
      return value;
    }

    const message = options.message || `${field} expected to be a string.`;
    throw new ValidationError(message);
  }
}

export interface IsStringOptions {
  message? : string;
}
