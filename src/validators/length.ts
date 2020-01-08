import { ValidationError } from '../validation.error';
import { format, ValidationFunction } from '../functions';

export function length(options: LengthOptions): ValidationFunction {
  const {
    length,
    message = '{field} length must be equal {length}.',
  } = options;

  return async(field: string | number, value: string) => {
    if (value.length === length) {
      return value;
    }

    throw new ValidationError(format(message, { field, length }));
  }
}

export interface LengthOptions {
  length: number;
  message?: string;
}
