import { ValidatorArguments, ValidationError, ValidationFunction } from '../types';

export function isString(options: IsStringOptions = {}): ValidationFunction {
  const {name = 'isString'} = options;

  return async(field: string | number, value: any, args: ValidatorArguments) => {
    if (typeof value === 'string') {
      return value;
    }

    throw new ValidationError(args.format(name, args.label || field, {}));
  }
}

export interface IsStringOptions {
  name?: string;
}
