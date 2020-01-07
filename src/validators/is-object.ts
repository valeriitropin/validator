import { ValidationError } from '../validation.error';

export function isObject(options: IsObjectOptions = {}) {
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