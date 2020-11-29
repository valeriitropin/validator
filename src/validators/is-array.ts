import { ValidatorArguments, ValidationError, ValidationFunction } from '../types';

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
