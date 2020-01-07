import { ValidationError } from '../validation.error';

export function minLength(options: MinLengthOptions) {
  const { min, message } = options;

  return async(field: string | number, value: string) => {
    if (value.length >= min) {
      return value;
    }

    const _message = message || `${field} must be no shorter than ${min}.`;
    throw new ValidationError(_message);
  }
}

export interface MinLengthOptions {
  min: number;
  message?: string;
}