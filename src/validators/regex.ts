import { ValidationFunction } from '../functions';
import { ValidationError } from '../validation.error';

export function regex(options: RegexOptions): ValidationFunction {
  const { pattern, message } = options;

  return async(field: string | number, value: string) => {
    if (value.match(pattern)) {
      return value;
    }

    const _message = message || `${field} is not valid.`;
    throw new ValidationError(_message);
  };
}

export interface RegexOptions {
  pattern: RegExp;
  message?: string;
}
