import { ValidationError } from '../validation.error';
import { ValidationFunction } from '../functions';
import { ValidatorArguments } from '../validator-arguments';

export function isArray(options: IsArrayOptions = {}): ValidationFunction {
  const {
    message = '{field} expected to be an array.',
  } = options;

  return async(field: string | number, value: any, args: ValidatorArguments) => {
    if (Array.isArray(value)) {
      return value;
    }

    throw new ValidationError(args.format(message, { field }));
  }
}

export interface IsArrayOptions {
  message?: string;
}