import { ValidationFunction } from '../functions';
import { ValidationError } from '../validation.error';

export function isNumber(options: NumberValidatorOptions = {}): ValidationFunction {
  const {
    integer = false,
    message,
    intMessage,
  } = options;

  return async(field: string | number, value: any) => {
    if (typeof value !== 'number') {
      const _message = message || `${field} expected to be a number.`;
      throw new ValidationError(_message);
    }

    if (integer && !Number.isInteger(value)) {
      const _intMessage = intMessage || `${field} expected to be an integer number.`;
      throw new ValidationError(_intMessage);
    }

    return value;
  }
}

export interface NumberValidatorOptions {
  integer?: boolean;
  message?: string;
  intMessage?: string;
}
