import { ValidationError } from '../validation.error';
import { ValidationFunction } from '../functions';

export function isObject(options: IsObjectOptions = {}): ValidationFunction {
  return async(field: string | number, value: any) => {
    if (value !== null && !Array.isArray(value) && typeof value === 'object') {
      return value;
    }

    const message = options.message || `${field} expected to be an object.`;
    throw new ValidationError(message);
  };
}

export interface IsObjectOptions {
  message?: string;
}