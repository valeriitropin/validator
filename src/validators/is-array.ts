import { ValidationError } from '../validation.error';
import { format, ValidationFunction } from '../functions';

export function isArray(options: IsArrayOptions = {}): ValidationFunction {
  const {
    message = '{field} expected to be an array.',
  } = options;
  return async(field: string | number, value: any) => {
    if (Array.isArray(value)) {
      return value;
    }

    throw new ValidationError(format(message, { field }));
  }
}

export interface IsArrayOptions {
  message?: string;
}