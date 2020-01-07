import { ValidationError } from '../validation.error';

export function length(options: LengthOptions) {
  const { length, message } = options;

  return async(field: string | number, value: string) => {
    if (value.length === length) {
      return value;
    }

    const _message = message || `${field} length must be equal ${length}.`;
    throw new ValidationError(_message);
  }
}

export interface LengthOptions {
  length: number;
  message?: string;
}
