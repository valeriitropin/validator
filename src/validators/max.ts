import { ValidationError } from '../validation.error';

export function max(options: MaxOptions) {
  const { max, message } = options;

  return async(field: string | number, value: number) => {
    if (value <= max) {
      return value;
    }

    const _message = message || `${field} must be no greater than ${max}.`;
    throw new ValidationError(_message);
  }
}

export interface MaxOptions {
  max: number;
  message?: string;
}