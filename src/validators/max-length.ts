import { ValidatorArguments, ValidationError, ValidationFunction } from '../types';

export function maxLength(options: MaxLengthOptions): ValidationFunction {
  const {max, name = 'maxLength'} = options;

  return async(field: string | number, value: string, args: ValidatorArguments) => {
    if (value.length <= max) {
      return value;
    }

    throw new ValidationError(args.format(name, args.label || field, {max}));
  }
}

export interface MaxLengthOptions {
  max: number;
  name?: string;
}
