import { ValidatorArguments, ValidationError, ValidationFunction } from '../types';

export function isBoolean(options: IsBooleanOptions = {}): ValidationFunction {
  const {name = 'isBoolean'} = options;

  return async(field: string | number, value: any, args: ValidatorArguments) => {
    if (typeof value === 'boolean') {
      return value;
    }

    throw new ValidationError(args.format(name, args.label || field, {}));
  }
}

export interface IsBooleanOptions {
  name?: string;
}
