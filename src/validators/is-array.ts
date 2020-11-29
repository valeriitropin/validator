import { ValidationError } from '../validation.error';
import { ValidationFunction } from '../functions';
import { ValidatorArguments } from '../validator-arguments';

export function isArray(options: IsArrayOptions = {}): ValidationFunction {
  const {name = 'isArray'} = options;

  return async(field: string | number, value: any, args: ValidatorArguments) => {
    if (Array.isArray(value)) {
      return value;
    }

    throw new ValidationError(args.format(name, field, {}));
  }
}

export interface IsArrayOptions {
  name?: string;
}
