import { ValidationError } from '../validation.error';
import { ValidationFunction } from '../functions';
import { ValidatorArguments } from '../validator-arguments';

export function isObject(options: IsObjectOptions = {}): ValidationFunction {
  const {name = 'isObject'} = options;

  return async(field: string | number, value: any, args: ValidatorArguments) => {
    if (value !== null && !Array.isArray(value) && typeof value === 'object') {
      return value;
    }

    throw new ValidationError(args.format(name, field,{}));
  };
}

export interface IsObjectOptions {
  name?: string;
}
