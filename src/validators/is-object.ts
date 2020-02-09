import { ValidationError } from '../validation.error';
import { ValidationFunction } from '../functions';
import { ValidatorArguments } from '../validator-arguments';

export function isObject(options: IsObjectOptions = {}): ValidationFunction {
  const { message = '{field} expected to be an object.' } = options;

  return async(field: string | number, value: any, args: ValidatorArguments) => {
    if (value !== null && !Array.isArray(value) && typeof value === 'object') {
      return value;
    }

    throw new ValidationError(args.format(message, { field }));
  };
}

export interface IsObjectOptions {
  message?: string;
}