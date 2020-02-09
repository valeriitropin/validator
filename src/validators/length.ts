import { ValidationError } from '../validation.error';
import { ValidationFunction } from '../functions';
import { ValidatorArguments } from '../validator-arguments';

export function length(options: LengthOptions): ValidationFunction {
  const {
    length,
    message = '{field} length must be equal {length}.',
  } = options;

  return async(field: string | number, value: string, args: ValidatorArguments) => {
    if (value.length === length) {
      return value;
    }

    throw new ValidationError(args.format(message, { field, length }));
  }
}

export interface LengthOptions {
  length: number;
  message?: string;
}
