import { ValidationFunction } from '../functions';
import { ValidationError } from '../validation.error';

export function regex(options: RegexOptions): ValidationFunction {
  const {
    pattern,
  } = options;

  return async(field: string | number, value: string) => {
    if (value.match(pattern)) {
      return value;
    }

    throw new ValidationError(`${field} is not valid.`);
  };
}

export interface RegexOptions {
  pattern: RegExp;
}
