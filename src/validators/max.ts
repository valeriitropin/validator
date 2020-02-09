import { ValidationError } from '../validation.error';
import { ValidationFunction } from '../functions';
import { ValidatorArguments } from '../validator-arguments';

export function max(options: MaxOptions): ValidationFunction {
  const {
    max,
    message = '{field} must be no greater than {max}.',
  } = options;

  return async(field: string | number, value: number, args: ValidatorArguments) => {
    if (value <= max) {
      return value;
    }

    throw new ValidationError(args.format(message, { field, max }));
  }
}

export interface MaxOptions {
  max: number;
  message?: string;
}