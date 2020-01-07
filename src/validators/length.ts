import { ValidationError } from '../validation.error';
import { ValidationFunction } from '../functions';

export function length(options: LengthOptions): ValidationFunction {
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
