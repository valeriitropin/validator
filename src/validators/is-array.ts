import { ValidationError } from '../validation.error';
import { ValidationFunction } from '../functions';

export function isArray(options: IsArrayOptions = {}): ValidationFunction {
  return async(field: string | number, value: any) => {
    if (Array.isArray(value)) {
      return value;
    }

    const _message = options.message || `${field} expected to be an array.`;
    throw new ValidationError(_message);
  }
}

export interface IsArrayOptions {
  message?: string;
}