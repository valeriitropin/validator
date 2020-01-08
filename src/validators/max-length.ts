import { ValidationError } from '../validation.error';
import { format, ValidationFunction } from '../functions';

export function maxLength(options: MaxLengthOptions): ValidationFunction {
  const {
    max,
    message = '{field} must be no longer than {max}.',
  } = options;

  return async(field: string | number, value: string) => {
    if (value.length <= max) {
      return value;
    }

    throw new ValidationError(format(message, { field, max }));
  }
}

export interface MaxLengthOptions {
  max: number;
  message?: string;
}
