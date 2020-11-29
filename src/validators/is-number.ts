import { ValidationFunction } from '../functions';
import { ValidationError } from '../validation.error';
import { ValidatorArguments } from '../validator-arguments';

export function isNumber(options: NumberValidatorOptions = {}): ValidationFunction {
  const {integer = false, name} = options;

  return async(field: string | number, value: any, args: ValidatorArguments) => {
    if (typeof value !== 'number') {
      throw new ValidationError(args.format(name || 'isNumber', field, {}));
    }

    if (integer && !Number.isInteger(value)) {
      throw new ValidationError(args.format(name || 'isIntegerNumber', field, {}));
    }

    return value;
  }
}

export interface NumberValidatorOptions {
  name?: string;
  integer?: boolean;
}
