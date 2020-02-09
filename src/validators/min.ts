import { ValidationError } from '../validation.error';
import { ValidationFunction } from '../functions';
import { ValidatorArguments } from '../validator-arguments';

export function min(options: MinOptions): ValidationFunction {
  const {
    min,
    message = '{field} must be no less than {min}.',
  } = options;

  return async(field: string | number, value: number, args: ValidatorArguments) => {
    if (value >= min) {
      return value;
    }

    throw new ValidationError(args.format(message, { field, min }));
  }
}

export interface MinOptions {
  min: number;
  message?: string;
}