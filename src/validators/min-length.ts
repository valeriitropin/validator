import { ValidationError } from '../validation.error';
import { format, ValidationFunction } from '../functions';

export function minLength(options: MinLengthOptions): ValidationFunction {
  const {
    min,
    message = '{field} must be no shorter than {min}.',
  } = options;

  return async(field: string | number, value: string) => {
    if (value.length >= min) {
      return value;
    }

    throw new ValidationError(format(message, { field, min }));
  }
}

export interface MinLengthOptions {
  min: number;
  message?: string;
}