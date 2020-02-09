import { ValidationError } from '../validation.error';
import { ValidationFunction } from '../functions';
import { ValidatorArguments } from '../validator-arguments';

export function maxLength(options: MaxLengthOptions): ValidationFunction {
  const {
    max,
    message = '{field} must be no longer than {max}.',
  } = options;

  return async(field: string | number, value: string, args: ValidatorArguments) => {
    if (value.length <= max) {
      return value;
    }

    throw new ValidationError(args.format(message, { field, max }));
  }
}

export interface MaxLengthOptions {
  max: number;
  message?: string;
}
