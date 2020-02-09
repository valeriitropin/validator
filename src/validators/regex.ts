import { ValidationFunction } from '../functions';
import { ValidationError } from '../validation.error';
import { ValidatorArguments } from '../validator-arguments';

export function regex(options: RegexOptions): ValidationFunction {
  const {
    pattern,
    message = '{field} is invalid.',
  } = options;

  return async(field: string | number, value: string, args: ValidatorArguments) => {
    if (value.match(pattern)) {
      return value;
    }

    throw new ValidationError(args.format(message, { field }));
  };
}

export interface RegexOptions {
  pattern: RegExp;
  message?: string;
}
