import { format, ValidationFunction } from '../functions';
import { ValidationError } from '../validation.error';

export function regex(options: RegexOptions): ValidationFunction {
  const {
    pattern,
    message = '{field} is invalid.',
  } = options;

  return async(field: string | number, value: string) => {
    if (value.match(pattern)) {
      return value;
    }

    throw new ValidationError(format(message, { field }));
  };
}

export interface RegexOptions {
  pattern: RegExp;
  message?: string;
}
