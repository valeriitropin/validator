import { ValidationFunction } from '../functions';
import { ValidationError } from '../validation.error';

export function isNumber(options: NumberValidatorOptions = {}): ValidationFunction {
  const { integer = false } = options;

  return async (field: string | number, value: any) => {
    if (typeof value !== 'number') {
      throw new ValidationError(`${field} expected to be a number.`);
    }
    if (integer && !Number.isInteger(value)) {
      throw new ValidationError(`${field} expected to be an integer number.`);
    }
    return value;
  }
}

export interface NumberValidatorOptions {
  integer?: boolean,
}
