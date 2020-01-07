import { ValidationError } from '../validation.error';

export function isBoolean(options: IsBooleanOptions = {}) {
  return async(field: string | number, value: any) => {
    if (typeof value === 'boolean') {
      return value;
    }

    const _message = options.message || `${field} expected to be a boolean.`;
    throw new ValidationError(_message);
  }
}

export interface IsBooleanOptions {
  message?: string;
}
