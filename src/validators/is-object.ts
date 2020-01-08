import { ValidationError } from '../validation.error';
import { format, ValidationFunction } from '../functions';

export function isObject(options: IsObjectOptions = {}): ValidationFunction {
  const { message = '{field} expected to be an object.' } = options;

  return async(field: string | number, value: any) => {
    if (value !== null && !Array.isArray(value) && typeof value === 'object') {
      return value;
    }

    throw new ValidationError(format(message, { field }));
  };
}

export interface IsObjectOptions {
  message?: string;
}