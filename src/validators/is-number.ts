import { format, ValidationFunction } from '../functions';
import { ValidationError } from '../validation.error';

export function isNumber(options: NumberValidatorOptions = {}): ValidationFunction {
  const {
    integer = false,
    message = '{field} expected to be a number.',
    intMessage = '{field} expected to be an integer number.',
  } = options;

  return async(field: string | number, value: any) => {
    if (typeof value !== 'number') {
      throw new ValidationError(format(message, { field }));
    }

    if (integer && !Number.isInteger(value)) {
      throw new ValidationError(format(intMessage, { field }));
    }

    return value;
  }
}

export interface NumberValidatorOptions {
  integer?: boolean;
  message?: string;
  intMessage?: string;
}
