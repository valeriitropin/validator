import { ValidationError } from '../validation.error';
import { format, ValidationFunction } from '../functions';

export function max(options: MaxOptions): ValidationFunction {
  const {
    max,
    message = '{field} must be no greater than {max}.',
  } = options;

  return async(field: string | number, value: number) => {
    if (value <= max) {
      return value;
    }

    throw new ValidationError(format(message, { field, max }));
  }
}

export interface MaxOptions {
  max: number;
  message?: string;
}