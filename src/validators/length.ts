import { ValidatorArguments, ValidationError, ValidationFunction } from '../types';

export function length(options: LengthOptions): ValidationFunction {
  const {length, name = 'length'} = options;

  return async(field: string | number, value: string, args: ValidatorArguments) => {
    if (value.length === length) {
      return value;
    }

    throw new ValidationError(args.format(name, args.label || field, {length}));
  }
}

export interface LengthOptions {
  length: number;
  name?: string;
}
