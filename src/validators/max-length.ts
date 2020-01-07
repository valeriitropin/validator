import { ValidationError } from '../validation.error';

export function maxLength(options: MaxLengthOptions) {
  const { max, message } = options;

  return async(field: string | number, value: string) => {
    if (value.length <= max) {
      return value;
    }

    const _message = message || `${field} must be no longer than ${max}.`;
    throw new ValidationError(_message);
  }
}

export interface MaxLengthOptions {
  max: number;
  message?: string;
}
