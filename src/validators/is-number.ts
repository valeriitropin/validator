import { ValidatorArguments, ValidationError, ValidationFunction } from '../types';

export function isNumber(options: NumberValidatorOptions = {}): ValidationFunction {
  const {integer = false, name} = options;

  return async(field: string | number, value: any, args: ValidatorArguments) => {
    if (typeof value !== 'number') {
      throw new ValidationError(args.format(name || 'isNumber', field, {integer}));
    }

    if (integer && !Number.isInteger(value)) {
      throw new ValidationError(args.format(name || 'isIntegerNumber', field, {integer}));
    }

    return value;
  }
}

export interface NumberValidatorOptions {
  name?: string;
  integer?: boolean;
}
