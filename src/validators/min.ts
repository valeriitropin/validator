import { ValidationError } from '../validation.error';
import { format, ValidationFunction } from '../functions';

export function min(options: MinOptions): ValidationFunction {
  const {
    min,
    message = '{field} must be no less than {min}.',
  } = options;

  return async(field: string | number, value: number) => {
    if (value >= min) {
      return value;
    }

    throw new ValidationError(format(message, { field, min }));
  }
}

export interface MinOptions {
  min: number;
  message?: string;
}