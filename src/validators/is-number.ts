import { ValidationFunction } from '../functions';
import { ValidationError } from '../validation.error';
import { ValidatorArguments } from '../validator-arguments';

export function isNumber(options: NumberValidatorOptions = {}): ValidationFunction {
  const {
    integer = false,
    message = '{field} expected to be a number.',
    intMessage = '{field} expected to be an integer number.',
  } = options;

  return async(field: string | number, value: any, args: ValidatorArguments) => {
    if (typeof value !== 'number') {
      throw new ValidationError(args.format(message, { field }));
    }

    if (integer && !Number.isInteger(value)) {
      throw new ValidationError(args.format(intMessage, { field }));
    }

    return value;
  }
}

export interface NumberValidatorOptions {
  integer?: boolean;
  message?: string;
  intMessage?: string;
}
